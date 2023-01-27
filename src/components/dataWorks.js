import Xkdc from '/assets/xkdc.webp'
import Gifree from '/assets/gifree.webp'
import Notes from '/assets/notes.webp'
import Cocktails from '/assets/cocktails.webp'

const works = [
  {
    title: 'Xkcd comics',
    description: 'Read and search XKCD Comics.',
    technologies: [ 'NEXT.JS', 'TAILWIND', 'NEXT UI', 'ALGOLIA' ],
    img: Xkdc,
    url: 'https://xkcd-app-taupe.vercel.app'
  },
  {
    title: 'Gifree',
    description: 'Search gifs, apply filters and share it.',
    technologies: [ 'REACT.JS', 'TYPESCRIPT', 'DENO' ],
    img: Gifree,
    url: 'https://gi-free.vercel.app'
  },
  {
    title: 'Notes app',
    description: 'Create a account and save your notes.',
    technologies: [ 'REACT.JS', 'NODE.JS', 'MONGO BD', 'JEST/CYPRESS', 'TAILWIND' ],
    img: Notes,
    url: 'https://notes-app-y1me.onrender.com'
  },
  {
    title: 'Cocktails app',
    description: 'Search and filter your favorites cocktails.',
    technologies: [ 'REACT.JS', 'TAILWIND' ],
    img: Cocktails,
    url: 'https://cocktails-app-dpg.netlify.app'
  }
]

export default works