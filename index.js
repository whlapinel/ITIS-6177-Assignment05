const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Replace this command with the appropriate command for your system
  const command = process.platform === 'win32' ? 'start cmd' : 'x-terminal-emulator';

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      res.status(500).send('Internal Server Error');
    } else {
      console.log(`Terminal opened successfully: ${stdout}`);
      res.status(200).send('Terminal opened successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

