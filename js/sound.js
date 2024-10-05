function playSound(u,o){if(soundOn){var n=soundID;soundPushArr.push(n),soundID++;var s=null==o?1:o;$.sound[n]=createjs.Sound.play(u),$.sound[n].defaultVol=s,setSoundVolume(n),$.sound[n].removeAllEventListeners(),$.sound[n].addEventListener("complete",function(){var u=soundPushArr.indexOf(n);-1!=u&&soundPushArr.splice(u,1)})}}function playSoundLoop(u){soundOn&&null==$.sound[u]&&(soundLoopPushArr.push(u),$.sound[u]=createjs.Sound.play(u),$.sound[u].defaultVol=1,setSoundLoopVolume(u),$.sound[u].removeAllEventListeners(),$.sound[u].addEventListener("complete",function(){$.sound[u].play()}))}function toggleSoundLoop(u,o){soundOn&&null!=$.sound[u]&&(o?$.sound[u].play():$.sound[u].paused=!0)}function stopSoundLoop(u){if(soundOn&&null!=$.sound[u]){$.sound[u].stop(),$.sound[u]=null;var o=soundLoopPushArr.indexOf(u);-1!=o&&soundLoopPushArr.splice(o,1)}}function playMusicLoop(u){soundOn&&null==$.sound[u]&&(musicPushArr.push(u),$.sound[u]=createjs.Sound.play(u),$.sound[u].defaultVol=1,setMusicVolume(u),$.sound[u].removeAllEventListeners(),$.sound[u].addEventListener("complete",function(){$.sound[u].play()}))}function toggleMusicLoop(u,o){soundOn&&null!=$.sound[u]&&(o?$.sound[u].play():$.sound[u].paused=!0)}function stopMusicLoop(u){if(soundOn&&null!=$.sound[u]){$.sound[u].stop(),$.sound[u]=null;var o=musicPushArr.indexOf(u);-1!=o&&musicPushArr.splice(o,1)}}function stopSound(){createjs.Sound.stop()}function toggleSoundInMute(u){if(soundOn){soundMute=u;for(var o=0;o<soundPushArr.length;o++)setSoundVolume(soundPushArr[o]);for(o=0;o<soundLoopPushArr.length;o++)setSoundLoopVolume(soundLoopPushArr[o]);setAudioVolume()}}function toggleMusicInMute(u){if(soundOn){musicMute=u;for(var o=0;o<musicPushArr.length;o++)setMusicVolume(musicPushArr[o])}}function setSoundVolume(u,o){if(soundOn){var n=soundPushArr.indexOf(u);if(-1!=n){var s=null==o?$.sound[soundPushArr[n]].defaultVol:o,d=0==soundMute?s:0;$.sound[soundPushArr[n]].volume=d,$.sound[soundPushArr[n]].defaultVol=s}}}function setSoundLoopVolume(u,o){if(soundOn){var n=soundLoopPushArr.indexOf(u);if(-1!=n){var s=null==o?$.sound[soundLoopPushArr[n]].defaultVol:o,d=0==soundMute?s:0;$.sound[soundLoopPushArr[n]].volume=d,$.sound[soundLoopPushArr[n]].defaultVol=s}}}function setMusicVolume(u,o){if(soundOn){var n=musicPushArr.indexOf(u);if(-1!=n){var s=null==o?$.sound[musicPushArr[n]].defaultVol:o,d=0==musicMute?s:0;$.sound[musicPushArr[n]].volume=d,$.sound[musicPushArr[n]].defaultVol=s}}}function playAudio(u,o){soundOn&&null==audioFile&&(audioFile=createjs.Sound.play(u),setAudioVolume(),audioFile.removeAllEventListeners(),audioFile.addEventListener("complete",function(u){audioFile=null,"function"==typeof o&&o()}))}function stopAudio(){soundOn&&null!=audioFile&&(audioFile.stop(),audioFile=null)}function setAudioVolume(){if(soundOn&&null!=audioFile){var u=0==soundMute?1:0;audioFile.volume=u}}var soundOn,enableDesktopSound=!0,enableMobileSound=!0,soundMute=!1,musicMute=!1;$.sound={};var soundID=0,soundPushArr=[],soundLoopPushArr=[],musicPushArr=[],audioFile=null;