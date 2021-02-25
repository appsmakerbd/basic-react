import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const banglaHero=['Salman Khan','Sakib Khan','Riaz', 'Rubel', 'Jasim', 'Bapparaz']; 

  // const heroName=banglaHero.map(hero => hero);
  // console.log(heroName);

  const products=[
    {name:'ASUS A678 Laptop',price:'$99.99'},
    {name:'MiA2 Lite 64',price:'$128.99'},
    {name:'Mi 10',price:'$156.99'},
    {name:'Ladies Bag Stripped',price:'$6.99'},
    {name:'Pen Drive 256 GB ',price:'$23.99'}
  ]
  
  
  

  const css={
    backgroundColor:'green',
    color:'red'
  }
  const detail={
    name: 'Rajibul Hasan Rayhan',
    mobile: '01727843493',
    city: 'Dhaka'
  }


  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={css}>I am Rajibul Hasan</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload. I reloded
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>






      <hr/>
      <h1>React State Example</h1>
      <Countme></Countme>
      <hr/>
      <h2>Array Mapping </h2>

      <ul>
        {
          //Reading Array
          banglaHero.map(hero => <li>{hero}</li>)
        }

        {
          //Reading Object
          products.map(product => <li>{product.name} {product.price}</li>)
        }
      </ul>


      <hr/>
        <h1>Show Users From API</h1>
        <Users></Users>

      <hr/>





        <Smallbox></Smallbox>
        <Smallbox></Smallbox>
        <Smallbox></Smallbox>
        <Smallbox></Smallbox>
        <p style={{backgroundColor:'red'}}>I am {detail.name} I leave in {detail.city}</p>

        <hr/>
        
        <section style={{border:'1px solid red', padding:'10px'}}>
          <h1 style={{textAlign:'center',color:'red'}}>Dynamic Data Passing</h1>
          <PassProperty title="Rajibul Hasan" city="Dhaka"></PassProperty>
          <PassProperty  title="Mehjabin Hasan" ></PassProperty>
          <PassProperty  title="Rizwan Hasan Arman" city="Barisal" ></PassProperty>
        </section>

        
        
        <section style={{width:'80%',margin:'auto',border:'1px solid blue'}}>
          <h1 style={{textAlign:'center',color:'blue'}}>Simple Product list</h1>
          
            <ProductOne name={products[0].name} price={products[0].price}></ProductOne>
            <ProductOne name={products[1].name} price={products[1].price}></ProductOne>
            <ProductOne name={products[2].name} price={products[2].price}></ProductOne>
            <ProductOne name={products[3].name} price={products[3].price}></ProductOne>
          
        </section>

        <hr/>

        
        <section style={{width:'80%',margin:'auto',border:'1px solid blue'}}>
          <h1 style={{textAlign:'center',color:'blue'}}>Advanced Product list Using Destructure </h1>
            <ProductAdvanced product={products[0]}></ProductAdvanced>
            <ProductAdvanced product={products[1]}></ProductAdvanced>
            <ProductAdvanced product={products[2]}></ProductAdvanced>
        </section>


        <section style={{width:'80%',margin:'auto',border:'1px solid orange'}}>
          <h1 style={{textAlign:'center',color:'blue'}}>Advanced Product list Using MAP | 1 LINE CODE </h1>
            {
              //Passing single Object to the ProductAdvanced function
              products.map(singleItem => <ProductAdvanced product={singleItem}></ProductAdvanced> )
            }
            
            
        </section>
        
      </header>
    </div>
  );
}



//1. Learning components 
function Smallbox(){
  const style={
    border:'1px solid yellow',
    width:'40%',
    margin:'10px auto'
  }
  return (
    <div style={style}>
      <h1>Headline</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quaerat culpa ad cum id beatae numquam, aliquam maxime quas saepe. Illo error iusto, dolores accusantium quo earum similique, ex quasi, accusamus reiciendis vel ipsum eligendi officia debitis aperiam incidunt magni?</p>
    </div>
  )
}


//2. Working with props
function PassProperty(props){
 
  return (
    <div>
      <h2>Passing Value by Attribute Dynamically | Name:{props.title} | Address: {props.city}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      
    </div>
  );
}


//3. SImple Dynamic Product Component using props

function ProductOne(props){
  const style={
    width:'30%',
    border:'1px solid blue',
    margin:'5px',
    padding:'10px',
    float:'left',
    backgroundColor:'white',
    color:'black'
  }

  

  return(
    <div style={style}>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}



//4. Advanced Dynamic Product Component using props

function ProductAdvanced(props){
  const style={
    width:'30%',
    border:'1px solid blue',
    margin:'5px',
    padding:'10px',
    float:'left',
    backgroundColor:'white',
    color:'black'
  }

  //console.log(props.product.name);

  //Destructure process
  const {name,price}=props.product;
 
  return(
    <div style={style}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}


// 5. Using State
function Countme(){

  const [count, setCount]=useState(0);
  const increaseItem=()=>setCount(count+1);


  const style={
    border:'1px solid yellow',
    padding:'5px'
  }

  return (
    <div style={style}>
      <h4>Cart Item: {count}</h4>
      <button onClick={increaseItem}>Add Item</button>
    </div>
  )
}




// 6. Calling API using useEffect [useEffect is must for API call]
function Users(){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json(0))
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        <li>User Name</li>
      </ul>
    </div>
  );
}




export default App;
