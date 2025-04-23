async function fetchLyrics() {
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();
    const lyricsDiv = document.getElementById('lyrics');

    if (!artist || !song) {
        lyricsDiv.textContent = "Please enter both artist and song name.";
        return;
    }

    lyricsDiv.textContent = "Loading...";

    try {
        const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const data = await response.json();

        if (data.lyrics) {
            lyricsDiv.textContent = data.lyrics;
        } else {
            lyricsDiv.textContent = "Lyrics not found. Check spelling or try another song.";
        }
    } catch (error) {
        lyricsDiv.textContent = "Error fetching lyrics. Please try again later.";
    }
}