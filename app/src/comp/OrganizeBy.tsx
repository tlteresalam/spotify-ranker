import { useState } from "react";

type Props = {
  organizeSettings: OrganizeSettings,
}

type OrganizeSettings = {
  
}

function OrganizeBy(props: Props) {
  const [selectedFeature, setSelectedFeature] = useState<string>();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>();

  const onGo = () => {
    
  }

  const audioFeatures: Array<[string, string]> = [
    ['acousticness', 'Acousticness'],
    ['danceability', 'Danceability'],
    ['duration', 'Duration'],
    ['energy', 'Energy'],
    ['instrumentalness', 'Instrumentalness'],
    ['liveness', 'Liveness'],
    ['loudness', 'Loudness'],
    ['speechiness', 'Speechiness'],
    ['tempo', 'Tempo'],
    ['valence', 'Valence'],
  ]

  const sortingAlgorithms = [
    ['merge', 'Merge sort'],
    ['shell', 'Shell sort'],
  ]
  
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="font-sans text-lg text-white">Organize by</p>
      <select
        value={selectedFeature}
        onChange={ e => setSelectedFeature(e.target.value) }
        className="p-2 bg-spotify-gray rounded-lg text-white"
      >
        {audioFeatures.map(i => (
          <option value={i[0]}>{i[1]}</option>
        ))}
      </select>

      <p className="font-sans text-lg text-white">Sort with</p>
      <select
        value={selectedAlgorithm}
        onChange={ e => setSelectedAlgorithm(e.target.value) }
        className="p-2 bg-spotify-gray rounded-lg text-white"
      >
        {sortingAlgorithms.map(i => (
          <option value={i[0]}>{i[1]}</option>
        ))}
      </select>

      <button
        onClick={onGo}
        className="p-2 w-11 rounded-lg bg-spotify-green text-white font-bold"
      >Go</button>
    </div>
  )
}

export default OrganizeBy