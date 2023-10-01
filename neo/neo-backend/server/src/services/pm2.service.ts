import pm2 from "pm2";

function launchApp({
  app,
  script,
  port,
}: {
  app: string;
  script: string;
  port: number;
}) {
  const pm2Options = {
    name: app,
    script: script,
    env: {
      PORT: port, // Set the PORT environment variable to your custom port
    },
  };

  let started = false;
  pm2.connect((err) => {
    if (err) {
      console.error(err);
      return false;
    }

    pm2.start(
      {
        script: "D:\\hackathon\\server\\server.js", // Replace with the path to your script
        name: app,
        env: {
          PORT: port,
        },
      } as any,
      (err) => {
        if (err) {
          console.error(err);
          pm2.disconnect();
          return false;
        }

        pm2.disconnect();
        console.log(`App '${app}' started successfully . ${port}`);
        started = true;
      }
    );
  });
  return started;
}

export default launchApp;
