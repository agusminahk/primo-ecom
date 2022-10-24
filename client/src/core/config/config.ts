const getEnvironmentVariable = (environmentVariable: string): string => {
  let unvalidatedEnvironmentVariable: string | undefined;
  switch (environmentVariable) {
    case 'ENV':
      unvalidatedEnvironmentVariable = process.env.NEXT_PUBLIC_ENV;
      break;
    case 'PRIMO_API_LOCAL':
      unvalidatedEnvironmentVariable = process.env.NEXT_PUBLIC_PRIMO_API_LOCAL;
      break;
    case 'PRIMO_API_PROD':
      unvalidatedEnvironmentVariable = process.env.NEXT_PUBLIC_PRIMO_API_PROD;
      break;
  }

  if (!unvalidatedEnvironmentVariable) throw new Error(`Couldn't find environment variable: ${environmentVariable}`);

  return unvalidatedEnvironmentVariable;
};

const primoApi = getEnvironmentVariable('ENV') == 'dev' ? 'PRIMO_API_LOCAL' : 'PRIMO_API_PROD';

export const config = {
  env: getEnvironmentVariable('ENV'),
  primoApi: getEnvironmentVariable(primoApi),
};
