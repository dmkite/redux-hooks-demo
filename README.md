# Redux Hooks Demos

## Intro
Redux is a way to manage complex state in an application. It's not uncommon for components in different hierarchies to need to share information. When this happens, one might take the relevant information and embed it in the earliest common ancestor. When components share information in this way it leads to along trace of props passing and callbacks, which leads to lots of rerenders and passing irrelevant information down the component hierarchy. For example:
```
<GreatGrandparentComponent> // Has state and function to update state
    <GrandparentComponent1> // Receives state but does not use it
        <ParentComponent> // Receives state but does not use it
            <ChildComponent/> // Uses state and waits for an update
        </ParentComponent>
    </GrandparentComponent1>

    <GrandparentComponent2> // Receives callback but does not use it
        <ParentComponent/> // Uses callback to trigger changes in ChildComponent
    </GrandparentComponent2>
</GreatGrandparentcomponent>
```

In Redux this is simplified:
```
<GreatGrandparentComponent> 
    <GrandparentComponent1> 
        <ParentComponent>
            <ChildComponent/> // Hooks into the Redux store and waits for an update
        </ParentComponent>
    </GrandparentComponent1>

    <GrandparentComponent2> 
        <ParentComponent/> // Dispatches an action to update the Redux store
    </GrandparentComponent2>
</GreatGrandparentcomponent>
```


At a fundamental level there are 3 main pillars of redux:
1. Store
2. Actions
3. Reducers
## Store
The store holds state. It generally takes the form of a nested object.

## Actions 
Actions are objects that __always__ have a `type` property and optionally have a `payload` property (named `payload` by convention). They describe what change is happening and provide information about that change, but they don't update state. Objects are 'dispatched' which is how they are picked up by reducers.

You can dispatch an action by importing `useDispatch` from `react-redux` and adding this line to your component:
```
const dispatch = useDispatch()
```

You can see actions defined in `./actions.js`
You can see actions dispatched in `./components/SignIn.jsx`

## Reducers 
A reducer is a function that takes the old state and an action and produces new state. Redux intentionally uses immutable state, so it generates a new object every time. Conventionally these take the form of a switch case that looks at the `type` property of an object.

You can see a reducer in `./reducers.js`

# Hooking it up
The store is created via combining all of your different reducers into the Redux store and providing it to the application at the highest point by wrapping the `<App/>` component in a special component provided by the `react-redux` package called `<Provider/>`.

You can see this happening in `./index.js`

Individual components can access the store by using the `useSelector` hook. This takes all of the Redux store and passes the relevant content to the component in question. It's a good idea to pass as little of the store as necessary to prevent unneeded rerenders.

You can see this happening in `./components/PrivacyNotice.jsx`