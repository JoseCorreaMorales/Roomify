# Roomify
 
# Figma Design 🎨
Figma Design [Here](https://www.figma.com/design/I55jGFIhjQbJuwHYB1Kuj9/Roomify?node-id=0-1&node-type=canvas&t=zBjJgLfCILqTTifZ-0).


# App Architecture 
```python
src/
 ├── components/                # Shared components
 │   ├── Button.tsx             
 │   ├── Skeleton.tsx           
 │   ├── Loading.tsx   
 │   └── goTop.tsx         
 ├── pages/                     # Main pages (UI only)
 │   ├── ExamplePage/           # Reference name for example (e.g., Hero)
 │   │   ├── components/
 │   │   │   ├── HeroLeft.tsx   # A specific component
 │   │   │   └── HeroRight.tsx  # Another sub-component if needed
 │   ├── AboutUsPage.tsx        
 │   └── ContactPage.tsx        
 ├── views/                     # Features
 │   ├── Example/
 │   │   ├── components/
 │   │   │   ├── ExampleView.tsx  # Example view
 │   │   │   ├── SingleItem.tsx     # Individual component that is part of the feature
 │   │   ├── services/
 │   │   │   └── ExampleService.ts  # Logic to fetch data related to the feature
 │   │   ├── adapters/
 │   │   │   └── ExampleAdapter.ts  # Adapter to transform data if necessary
 │   │   ├── ExampleContainer.css   # (Optional) Styles for the feature
 │   │   └── ExampleContainer.tsx   # Main component for the example
 ├── hooks/                     # Custom Hooks
 │   ├── useX.ts                # Hook for specific logic  
 │   └── useY.ts                # Hook for specific logic  
 ├── context/                   # Global state using Context API (if context is used)
 │   ├── MyContext/             
 │   │   ├── MyContext.tsx      # Context file
 │   │   └── MyProvider.tsx     # Provider file for the context
 │   └── AnotherContext/        
 │       ├── AnotherContext.tsx 
 │       └── AnotherProvider.tsx 
 ├── routes/                    # Application routes
 │   ├── routes.tsx
 ├── types/                     # Type definitions and models
 │   ├── User.ts                # Types for users
 │   └── Auth.ts                # Types for authentication
 ├── store/                     # Global state using Zustand (if Zustand is used)
 │   └── useStore.ts            # Main store file with Zustand
 ├── redux/                     # Global state using Redux (if Redux is used)
 │   ├── actions/               # Defines all actions
 │   │   └── x-Actions.ts       # specific actions
 │   ├── reducers/              # Defines all reducers
 │   │   └── y-Reducer.ts       #  reducer
 │   ├── store.ts               # Store configuration
 │   └── types.ts               # Action and state types

```

