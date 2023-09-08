import './globals.css';


export const metadata = {
  title: 'Windbnb',
  description: 'Windbnb',
}

const Rootlayout = ( { children } ) => {
  return (
    <html lang="en">
    <div>
      { children }
    </div>
    </html>
  )
}

export default Rootlayout

