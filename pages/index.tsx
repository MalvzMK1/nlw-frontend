interface HomeProps {
  count: number;
}

export default function home(props: HomeProps) {
  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:8080/pools/count');
  const data = await response.json();

  console.log(data);
  
  return {
    props: {
      count: data.count,
    }
  }
}