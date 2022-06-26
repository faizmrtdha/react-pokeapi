import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import instance from '../api/instance';
import Card from '../components/Card/Card';
import { PokeService } from '../context/PokeService';

const Home = () => {
  const { state, dispatch } = useContext(PokeService);
  const {
    user: { pokes },
  } = state;

  const getData = async () => {
    const {
      data: { results },
    } = await instance.get('pokemon/?limit=20');
    const response = await Promise.all(
      results.map(({ url }) => axios.get(url))
    );
    dispatch({ type: 'add_pokemon', payload: { pokes: response } });
  };

  useEffect(() => {
    if (!state.user) getData();
  }, [state.user]);

  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="flex flex-col">
        <div className="p-6 flex mx-auto gap-x-2 w-full justify-center">
          <input
            placeholder="Search Pokemon"
            className="outline outline-blue-200 rounded-sm max-w-lg px-2 py-2"
          />
          <button className="text-base">
            <AiOutlineSearch />
          </button>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {pokes &&
            pokes.map(({ data }) => <Card data={data} key={data.name} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
