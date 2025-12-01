import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import org.json.JSONObject;

public class EmailClassifier {

    private static final String OLLAMA_URL = "http://localhost:11434/api/generate";
    private static final String MODEL = "llama3";

    public static String classifyEmail(String emailText, List<String> categories, List<String> directory) throws IOException {
        
        // Build prompt
        String prompt = "You are an email classification assistant.\n"
                + "Choose EXACTLY ONE category from the following list:\n"
                + String.join(", ", categories) + ".\n\n"
                + "Respond ONLY with the category name.\n\n"
                + "Email:\n" + emailText + "\n"
                + "Information about sender: " + String.join(",", directory) + ".";

        // Build JSON request body
        JSONObject json = new JSONObject();
        json.put("model", MODEL);
        json.put("prompt", prompt);

        // Send POST request
        URL url = new URL(OLLAMA_URL);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);

        // Write JSON body
        try (OutputStream os = conn.getOutputStream()) {
            byte[] input = json.toString().getBytes("utf-8");
            os.write(input, 0, input.length);
        }

        // Read response
        StringBuilder response = new StringBuilder();
        try (BufferedReader br = new BufferedReader(
                new InputStreamReader(conn.getInputStream(), "utf-8"))) {
            String line;
            while ((line = br.readLine()) != null) {
                response.append(line.trim());
            }
        }

        // Parse JSON response
        JSONObject jsonResponse = new JSONObject(response.toString());

        return jsonResponse.getString("response").trim();
    }

    public static void main(String[] args) throws IOException {
        List<String> categories = List.of("School", "Work", "Spam");
        List<String> directory = List.of("John Doe", "Company X");

        String email = "Hello, this is a reminder about tomorrow's meeting.";

        String result = classifyEmail(email, categories, directory);
        System.out.println("Classification: " + result);
    }
}
