# Creative Coding at Recurse Center

One of my favorite things about [Recurse Center](https://www.recurse.com/) is the weekly Creative Coding
session.

The format of Creative Coding is the following:

- a short prompt is announced by the organizer
- each person is free to let the prompt inspire them in any way
- we code, make stuff, try things out, for about 90 minutes
- then we demo what we made, and/or share what we learned

[Here](https://creativecoding.recurse.com/) are some of the amazing things
Recursers have made during Creative Coding.

I really love Creative Coding:

- it allowed me to think about coding as a creative endeavor
- the strict time limit forces me to push for results
- yet I can explore new technologies with a healthy timebox
- the excitement of making something within time limit feels like Top Chef or Chopped,
  except for coding and there's no competition, just fun and inspirations from others

## Nov. 8, 2023: One Dot

Prompt: _"You can only make one dot at a time"_

Result: `./one-dot/`

One dot is a little pixel coloring game. I also made it in preparation for a
discussion on React Native the following week.

This app is cross-platform, and the web version can be played at [one-dot-pixel-art.web.app](https://one-dot-pixel-art.web.app/).

![one-dot](./images/one-dot.png)

### Set Up

This app is built with [Expo](https://expo.dev/).

```
> npx create-expo-app app
```

The command will create an `app` directory.

### Running the App Locally

You can open the app in multiple ways. If you have iOS simulator installed, you
can do `npm run ios`. Since Expo projects support web (via `react-native-web`),
you can also do `npm run web` to have a local web server.

## Nov. 15, 2023: Breathe

Prompt: _"Breathe more deeply"_

This prompt made me think of breathing the fresh air in nature, and the molecules
that make up the air. So, combining with my [ThreeJS learning](https://github.com/jovisly/ThreeJS-Practices?tab=readme-ov-file#9---breathe),
I made a little interactive scene with air molecules.

You can play with it at [threejs-journey-practice.web.app/9-breathe/](https://threejs-journey-practice.web.app/9-breathe/).

![breathe](./images/breathe.png)

## Nov. 22, 2023: Fine

Prompt: _"Just carry on"_

This prompt made me think of one of my favorite memes, the "This is fine" dog.
So I staged a 3D version of the meme, again as part of my [ThreeJS learning](https://github.com/jovisly/ThreeJS-Practices?tab=readme-ov-file#13---fine).

You can see the result at [threejs-journey-practice.web.app/13-fine/](https://threejs-journey-practice.web.app/13-fine/).

![fine](./images/fine.png)

## Nov. 29, 2023: Food

Prompt: _"hygge"_

What's more comforting than food right? Especially food that drops from the sky
per your request. So, again with [ThreeJS](https://github.com/jovisly/ThreeJS-Practices?tab=readme-ov-file#15---food),
I made a scene called "Food".

You can play with it at [threejs-journey-practice.web.app/15-food/](https://threejs-journey-practice.web.app/15-food/).

![food](./images/food.png)

And, yes, I did combine Creative Coding with my ThreeJS learning quite a bit.
Something about how `n_b`, the number of birds, shold be greater than `n_r`, the
number of rocks.

## Dec. 6, 2023: Penny Stocks

Prompt: _"Penny wise, pound foolish"_

Result: `./penny-stocks/`

I misinterpreted this saying as how the penny is wise and the pound is foolish.
Turns out it's the opposite. It actually means being smart in small things but
missing the big picture. That's very wise but my mind was already on the track of
"smart pennies", which brought me to the thought of penny stocks that turned into
big returns.

So I gathered some [stock data from Kaggle](https://www.kaggle.com/datasets/jacksoncrow/stock-market-dataset),
and created a processed dataset of one-time penny stocks that became very successful.
You can see the result in [this spreadsheet](https://docs.google.com/spreadsheets/d/1FQb6mn_beTK_iJK4Fuc6q_nu7lTAj8oTDtAitSLFntI/edit#gid=1018175396).
To match the prompt, the spreadsheet converts how one penny spent on the stock
would later become in pounds. For example, if I had put one penny in Apple in 1982,
I'd have 9.81 pounds in 2020! Should've would've could've!
