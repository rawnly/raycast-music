import { useCachedPromise } from "@raycast/utils";

import { scripts, trackToSong } from "../apple-music";
import { promisify } from "../utils";
import useAuth from "./useAuth";

export default function useCurrentlyPlaying() {
	const { isLoggedIn, isMusicApiEnabled } = useAuth(false)

	const { data: track, isLoading: isLoadingTrack, revalidate: revalidateTrack } = useCachedPromise(() =>
		promisify(scripts.currentTrack.getCurrentTrack())
	);

	const { data: song, isLoading: isLoadingSong } = useCachedPromise(trackToSong, [track as any], {
		execute: !isLoadingTrack && !!track && isLoggedIn && isMusicApiEnabled,
	});

	return {
		track,
		song,
		isLoading: isLoadingTrack || isLoadingSong,
		revalidateTrack
	};
}
