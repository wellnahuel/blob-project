# Getting Started

This repository was developed as part of a skills evaluation using Next.js for Hire Digital.

The purpose of this application is to enable users to upload files up to 5MB to virtual storage on Vercel, and to view, modify, and delete these files in an intuitive and straightforward interface.

## For New Contributors

### Step-by-Step Instructions

1. Fork this repository.
2. Sign in to [Vercel](https://vercel.com/). If you don't have an account, please create one.
3. In the Vercel Dashboard, connect your forked project to your Git repository.
4. Navigate to "Storage" in the project settings and set up a Blob database.
5. Open the project using Visual Studio Code or your preferred code editor and run `vercel env pull .env.development.local`.
6. This will generate a file named ".env.development.local".
   - Optionally, you may include an environment variable called `BLOB_READ_WRITE_TOKEN="your token"`. You can locate your token in the Vercel platform under the project settings in the "Environment Variables" section.
7. In the terminal, execute `npm run dev` to start the development server.

## Considerations

- Due to time constraints I had only half day to work on this project. Consequently, the functionality may not be fully complete.
- The editing feature is not fully functional because of these time limitations; however, all other aspects of the application should work as expected.
- I have added documentation in each file to aid in understanding the project.

### Project Specifications

```bash
- Create a button that allows users to upload files <=5MB to Vercel’s blob storage.
  + Trigger a third-party API (example.com) when the upload process starts.
  + Trigger a third-party API (example.com) when the upload completes successfully.
  + Trigger a third-party API (example.com) if the upload fails.
  + Display a modal if the file size exceeds 5MB, preventing the upload.
- Once the upload is finished, show a list of links to the uploaded files for downloading.
- Include a pencil icon next to each link to enable file renaming. A modal with Save and Cancel options should appear for renaming.
- Display a skeleton loader while loading the list of files.
  - Add a simulated delay if the list loads too quickly to demonstrate the effect.
- Add a trash icon next to each link to allow file deletion.
- Implement error boundaries to manage errors and present an error UI.
- Ensure that the application's state persists through page refreshes.

Libraries
  - Use shadcn/ui or Radix UI.
  - Utilize Next.js 14 with App Router and Server Actions.
  - Maintain a Git repository for code changes and commits.
  - Deploy the application to Vercel.
  - Include brief documentation in README.md to highlight key aspects for new contributors.
```
