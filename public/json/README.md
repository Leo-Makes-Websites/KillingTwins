# Albums JSON

Example:

```json
[
  {
    "title": "Killing Twins",
    (Path relative to public folder)
    "imageUrl": "/media/demo-art.webp",
    "releaseDate": "2023"
  }
]
```

# Media JSON

Example:

```json
[
  {
    (Path relative to public folder)
    "src": "/media/demo-art.webp",
    (Describe image in text)
    "alt": "Killing Twins Demo",
    (original size in pixels)
    "size": 600,
    (not square? use width and height!)
    "width": 600,
    "height": 600
  (DONT FORGET COMMAS!)
  },
  {
    "src": "/media/demo-art.webp",
    "alt": "Killing Twins Demo",
    "size": 600
  }
]
```

# Events JSON

Example:

```json
[
  {
    "date": "January 4, 2023",
    "location": "The Great Hall",
    "ticketLink": "https://www.ticketmaster.com/event/killing-twins-2023-the-great-hall-tickets/",
    (Add as many buttons as you want)
    "buttons": [
      {
        "label": "Buy Tickets",
        "link": "https://www.ticketmaster.com/event/killing-twins-2023-the-great-hall-tickets/"
      },
      {
        "label": "VIP",
        "link": "https://www.ticketmaster.com/event/killing-twins-2023-the-great-hall-tickets/"
      }
    ]
  }
]
```
