const parseEnv = () => {
  const allowedEnvVars = Object.keys(process.env)
    .filter(envVar => envVar.startsWith('RSS_'))
    .map(envVar => `${envVar}=${process.env[envVar]}`).join('; ');

  console.log(allowedEnvVars);
};

parseEnv();