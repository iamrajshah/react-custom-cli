This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Custom CLI

This project is used to generate components from CLI:

### Directory Structure used
```
.
├── app
|   ├── actions
|   |   └──SampleComponent1.action.js
|   |   └──SampleComponent2.action.js
|   ├── components
|   |   └──SampleComponent1.js
|   |   └──SampleComponent2.js
|   ├── constants
|   |   └──SampleComponent1.constant.js
|   |   └──SampleComponent2.constant.js
|   ├── containers
|   |   ├──SampleContainer1.js
|   |   └──SampleContainer1.js
|   ├── reducers
|   |   └──SampleComponent1.reducer.js
|   |   └──SampleComponent2.reducer.js
|   ├── tests
|   |	├── actions
|   |   |	└──SampleComponent1.action.test.js
|   |   | 	└──SampleComponent2.action.test.js
|   |	├── components
|   |   | 	└──SampleComponent1.test.js
|   |   | 	└──SampleComponent2.test.js
|   |	├── containers
|   |   |	├──SampleContainer1.test.js
|   |   | 	├──SampleContainer1.test.js
|   |	├── reducers
|   |   | 	└──SampleComponent1.reducer.test.js
|   |   | 	└──SampleComponent2.reducer.test.js
|   ├── utils
|   |	 └──injectReducer.js
|   └── app.js
```


### `npm run generate`

This will start the utility to create the component/container for the application.  

Follow the step-by-step process to get the respective element in your project.

