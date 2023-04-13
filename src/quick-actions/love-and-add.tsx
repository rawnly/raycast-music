import { loveAndAddToLibrary } from "./lib/apple-music/scripts/current-track";
import { handleResult } from "./lib/utils";

export default handleResult(loveAndAddToLibrary, {
	onSuccess: "Track loved and added to library",
});
