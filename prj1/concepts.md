# Functions vs class based components

<details>
<summary>Function-Based Components</summary>
<br>

Function-based components, also known as functional components, are simply JavaScript functions that return JSX (React's syntax for creating elements).
They are typically shorter and easier to write. Here's a basic example:

```
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
export default Greeting;
```

- Simple and easy to read.
- Best for components that don't need lifecycle methods or state.
- With React Hooks (like useState and useEffect), functional components can also handle state and side effects.

</details>


## Class-Based Components

<details>
<summary>Class-Based Components</summary>
</br>

Class-based components are ES6 classes that extend from React.Component. They can hold and manage their own state and lifecycle methods. Here's a basic example:


```
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

Key Points:

- Can manage state and have access to lifecycle methods (e.g., componentDidMount, shouldComponentUpdate).
- More verbose than functional components.
- With the advent of Hooks, many use cases for class components can now be covered by functional components.
</details>

### When to Use Which
`Function-Based Components`: Preferred for simplicity, readability, and the power of Hooks. Use these for most components.

`Class-Based Components`: Use if you are maintaining older codebases or need to use lifecycle methods without Hooks.
