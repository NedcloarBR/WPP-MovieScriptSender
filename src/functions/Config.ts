export const DelayBetweenMessages =
  Number(
    process.argv.find((arg) => arg.includes("Delay="))?.replace("Delay=", "")
  ) ?? 1000;
