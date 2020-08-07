## Front End Engineer Stackline Assessment - Joey Schrader

## Steps to run locally

`git clone https://github.com/mojocodeio/client.git [DIRECTORY_NAME]`

`cd [DIRECTORY_NAME]`

`yarn`

`yarn start`


## Additional details about project

- Client side app built with React & Redux, bootstrapped with Create React App

- Utilizes [Recharts](http://recharts.org/en-US) npm module to display interactive line graph

- Styled using global css & css modules

- Each component connects directly to the Redux store, No prop drilling!!, to grab its necessary data and to keep clean, tidy React components

- Utilizes `useEffect` hook to simulate a fetch the in `<App />` component and immediately sets this data into the Redux store


Cheers!

