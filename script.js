// Lookup

const quotes = [
  {
    'quote': 'Part of life’s mystery depends on future possibilities, and mystery is an elusive quality which evaporates when sampled frequently, to be followed by boredom.',
    'author': 'Michael Collins',
    'textcolor': '#412',
    'bgcolor': '#ddd'
  },
  {
    'quote': 'In the van, we can see the rocket in the distance, lit up and shining, an obelisk. In reality, of course, it’s a 4.5-megaton bomb loaded with explosive fuel, which is why everyone else is driving away from it.',
    'author': 'Chris Hadfield',
    'textcolor': '#121',
    'bgcolor': '#aaa'
  },
  {
    'quote': 'The first day or so we all pointed to our countries. The third or fourth day we were pointing to our continents. By the fifth day we were only aware of one Earth.',
    'author': 'Sultan Bin Salman al-Suad',
    'textcolor': '#911',
    'bgcolor': '#cf2'
  },
  {
    'quote': 'Mars has been flown by, orbited, smacked into, radar examined, and rocketed onto, as well as bounced upon, rolled over, shoveled, drilled into, baked and even blasted. Still to come: Mars being stepped on.',
    'author': 'Buzz Aldrin',
    'textcolor': '#51a',
    'bgcolor': '#8f9'
  },
  {
    'quote': 'It’s easy to sleep floating around — it’s very comfortable. But you have to be careful that you don’t float into somebody or something!',
    'author': 'James Irwin',
    'textcolor': '#344',
    'bgcolor': '#3ff'
  },
  {
    'quote': 'If we adopt the same collaborative mindset and practices that got to the moon and back, and that built the International Space Station, we can alleviate poverty—and do much more.',
    'author': 'Ron Garan',
    'textcolor': '#234',
    'bgcolor': '#dd3'
  },
  {
    'quote': 'For every one billion particles of antimatter there were one billion and one particles of matter. And when the mutual annihilation was complete, one billionth remained – and that’s our present universe.',
    'author': 'Albert Einstein',
    'textcolor': '#aff',
    'bgcolor': '#912'
  },
  {
    'quote': 'Cosmology does, I think, affect the way that we perceive humanity’s role in nature. One thing we’ve learnt from astronomy is that the future lying ahead is more prolonged than the past. Even our sun is less than halfway through its life.',
    'author': 'Neil deGrasse Tyson',
    'textcolor': '#500',
    'bgcolor': '#ad0'
  }
];

//constants

const quoteBox = document.getElementById('quote-box');

//functions

const getRandom = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

//initial rendering
const initialQuote = getRandom();
quoteBox.style.backgroundColor = initialQuote.bgcolor;
const paragColor = initialQuote.textcolor;
//component

const Element = (
  <>
  <p style={{color: `${paragColor}`}}>{initialQuote.quote}</p>
  <p style={{color: `${paragColor}`}}>{initialQuote.author}</p>
  <button>new quote</button>
  <button>tweet stuff</button>
  </>
)

ReactDOM.render(Element, quoteBox);