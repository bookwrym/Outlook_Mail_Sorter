# 📌 Outlook Email Organizer + AI Summarizer  
### *Project Overview (Obsidian Note)*  
**Author:** Rayed Rahman, Hruday Tamboli, Owen Krepsik, Luiz Octavio, Jona Yan, Kotaro Tomas

**Status:** 🚧 *In Progress*  
**Goal:** Build a complete Outlook Add-in + backend system that can:  
✔️ Read the user’s inbox  
✔️ Automatically organize emails by sender into folders  
✔️ Defolderize on request  
✔️ Pull Purdue Directory data (TA/Professor detection)  
✔️ Eventually summarize emails using AI (Ollama / LLM)

---

## ⭐ Final Features  
These are the feature checkpoints of the full system:

### ✔️ Completed  
- **Purdue Directory Lookup**  
  - Scrapes Purdue’s directory and detects:  
    - Name  
    - Role (TA/Professor/Staff)  
    - Department  
    - Alias  
    - Campus  
    - Qualified Name  

- **Automatic Folderization**  
  - Folders created based on sender email  
  - Inbox cleaned automatically  
  - Graph API used for message moving & folder creation  

---

### ⏳ In Progress  
- **User-defined folder categories**  
  - User tells the system which folder a type of email should go to  
  - Example:  
    - “Put all Purdue emails into *School* folder”  
    - “Put notifications into *Updates* folder”  

- **Smart Sorting Engine**  
  - AI decides which folder each email belongs in  

---

### 🖥️ To Be Done  
- **GUI Optimization for Outlook Add-in**  
  - Better taskpane layout  
  - Folder visualization  
  - Directory lookup inside UI  
  - Buttons for actions:
    - Run Folderize
    - Undo Folderize
    - Summarize Email  

---

# 🧩 Core Components

---

## 🟦 1. Purdue Directory Module  
**Purpose:**  
Given a Purdue email or name → return complete metadata (role, department, title).  

**Used For:**  
- Detecting if sender is TA/Professor  
- Organizing academic emails differently  
- Future: auto-priority scoring  

**Technologies:**  
- `requests`  
- `BeautifulSoup`  
- Purdue Directory POST Search  

---

## 🟩 2. Folderization Engine (Microsoft Graph API)

### 🔧 What It Does
- Reads Inbox (`Mail.ReadWrite`)  
- Creates child folders under Inbox (`MailboxFolder.ReadWrite`)  
- Moves messages into folders named after sender  
- Uses pagination for large inboxes  
- Auto-creates folders only when needed  

**Folder Naming Rule:**  
`sender@domain.com` → Folder name exactly this  

---

## 🟥 3. Defolderization Engine  
Allows the user to **undo** all folderization.

### 🔄 What It Does:
1. Detect folders that look like email addresses  
2. Move *all* messages back to Inbox  
3. Delete empty folders  
4. Restore Outlook to its original state  

---

# 🧠 Planned AI Layer  
(Focused on free options)

### Options:
1. **Ollama (Local LLM)**  
   - Free  
   - Good for summarization  
   - Runs offline  
   - No API costs  

2. **OpenAI / Gemini (Cloud)**  
   - Better quality  
   - Paid  
   - Optional for users  

### AI Features (Planned)
- Summarize email body  
- Auto-tag emails  
- Predict folder category  
- Provide weekly summary emails  

---

# 📬 Outlook Add-in Roadmap

### 🧱 Phase 1 – Core Add-in  
- Manifest.xml  
- Ribbon button  
- Taskpane setup  
- Read selected email  
- Send body to backend API  

### 🎨 Phase 2 – UI Polish  
- Folder visualization  
- Purdue Directory lookup  
- One-click Folderize  
- Undo Folderize  
- Status logs + progress indicators  

### 🧠 Phase 3 – AI Features  
- Automatic summarization  
- Auto-routing decisions  
- Priority scoring  

---

# 📝 Current Notes
- Graph API fully working using personal Microsoft account  
- Purdue account restricted (cannot be used for app registration)  
- Project uses:
  - MSAL  
  - Python backend  
  - Outlook Office.js frontend  
- Folderization & Defolderization fully tested  
- Purdue Directory scraper functioning accurately  

---

# 🧭 Summary  
This project automates email organization using Microsoft Graph, enhances academic context using Purdue’s directory, and will eventually integrate AI to categorize and summarize emails.

The goal is to create a **powerful academic productivity tool inside Outlook**, complete with folderizing, undo capability, Purdue metadata integration, and optional AI summarization.

---

