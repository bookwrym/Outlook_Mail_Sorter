# Outlook_Mail_Sorter

📌 Outlook Email Organizer + AI Summarizer
Project Overview (Obsidian Note)

Author: Rayed Rahman
Status: 🚧 In Progress
Goal: Build a complete Outlook Add-in + backend system that can:
✔️ Read the user’s inbox
✔️ Automatically organize emails by sender into folders
✔️ Defolderize on request
✔️ Pull Purdue Directory data (TA/Professor detection)
✔️ Later summarize emails using AI (Ollama / LLM)

⭐ Final Features

These are the feature checkpoints of the full system:

✔️ Completed

Purdue Directory Lookup

Scrapes Purdue’s directory and detects:

Name

Role (TA/Professor/Staff)

Department

Alias

Campus

Qualified Name

Automatic Folderization

Folders created based on sender email

Inbox cleaned automatically

Graph API used for message moving & folder creation

⏳ In Progress

User-defined folder categories

User tells the system:

“Put all Purdue emails into School folder”

“Put notifications into Updates folder”

Custom mapping system

Smart Sorting Engine

AI decides which folder each email belongs in

🖥️ To Be Done

GUI Optimization for Outlook Add-in

Taskpane UI improvements

Live summarization and folder visualization

Rename / edit folder rules directly in UI

🧩 Core Components
🟦 1. Purdue Directory Module

Purpose:
Given a Purdue email or name → return complete metadata (role, department, title).
Used For:

Detecting if sender is TA/Professor

Organizing academic emails differently

Future: auto-priority scoring

Technologies:

requests

BeautifulSoup

Purdue Directory POST Search

🟩 2. Folderization Engine (Microsoft Graph API)
🔧 Main Abilities

Reads user’s Inbox (Mail.ReadWrite)

Creates child folders under Inbox (MailboxFolder.ReadWrite)

Moves messages into folders named after sender

50-message batch pagination

Auto-creates folders only if needed

Folder Naming Rule:
sender@domain.com → Folder name exactly this
(Setting for future human-readable names)

🟥 3. Defolderization Engine

Allows the user to undo all folderization.

🔄 What It Does:

Detects all folders created using sender naming

Moves emails back to Inbox

Deletes empty folders

Full reset to original state

🧠 Planned AI Layer

(Free options focused)

Options:

Ollama (Local Model)

Free

Good for email summarization

Zero cloud dependency

OpenAI / Gemini (Cloud)

Higher quality

Costs money

Optional for users

Planned Features:

Summarize email body

Auto-tagging of emails

Smart folder decisions

Weekly summary folders

📬 Outlook Add-in Roadmap
🧱 Phase 1 – Core Add-in

Manifest.xml

Button in Ribbon

Taskpane

Fetch selected email body

Send to backend

🎨 Phase 2 – UI Polish

Folder visualization

Purdue Directory lookup in UI

“Run Folderize” button

“Undo Folderize” button

Live status logs

🧠 Phase 3 – AI Features

Summarization

Categorization

Smart email routing

Priority alerts

📝 Current Notes

Graph API working with personal Microsoft account

Purdue account cannot be used due to tenant restrictions

Project currently built with MSAL + Python backend + Outlook JS frontend

Folderization is fully functional

Directory lookup module fully functional

🧭 Summary

This project automates Outlook email organization using Microsoft Graph, enhances academic context using Purdue’s directory, and will later apply AI to auto-summarize and classify emails.

The add-in will be a complete academic productivity tool inside Outlook with undo capability, smart sorting, and optional AI summarization.
