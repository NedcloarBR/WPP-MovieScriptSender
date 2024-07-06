import cliProgress from "cli-progress";

export const progressBar = new cliProgress.MultiBar(
  {
    format: `{bar} | {movie} | {chat} | {percentage}% | {value}/{total} | {duration}s`,
    hideCursor: true,
    clearOnComplete: false,
  },
  cliProgress.Presets.shades_classic
);
