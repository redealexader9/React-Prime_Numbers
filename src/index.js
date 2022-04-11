import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function PrimeTable(){
  let arr = [];
  let arr2 = [];
  let isPrimeNum;
  for(let i = 1; i < 101; i++){
    isPrimeNum = isPrime(i);
    if(isPrimeNum){
      arr.push(<td className="prime">{i}</td>);
    }
    else{
      arr.push(<td>{i}</td>);
    }
    if(i % 10 === 0){
      arr2.push(<tr>{arr}</tr>);
      arr = [];
    }
  }
  const template = <table>{arr2}</table>;
  ReactDOM.render(template, document.getElementById('root'));

}

function isPrime(num){
  if(num === 1){
    return false;
  }
  else if(num > 1){

    for(let i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }

    }
    return true;


  }
}

ReactDOM.render(
  <React.StrictMode>
    <PrimeTable />
  </React.StrictMode>,
  document.getElementById('root')
);
