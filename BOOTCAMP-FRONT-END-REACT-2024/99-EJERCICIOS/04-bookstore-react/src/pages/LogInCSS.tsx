import { Typography } from '../components';

function LogIn () {
  return (
    <>
      <Typography as="h1">Log In</Typography>

      <form className='bg-white p-8 rounded my-12 flex flex-col gap-8'>
        <label className='flex justify-between items-center'>
          Email:
          <div className='relative'>
            <input type="email" className='outline-none ring-2 focus:ring-violet-300  focus:invalid:ring-red-400 invalid:ring-red-400 border-2 rounded px-4 py-2 ' pattern="^.+@[^\.].*\.[a-z]{2,}$"/>
            <span className='peer-invalid:block hidden  text-red-400 absolute top-full left-0 text-xs'>Campo requerido</span>
          </div>
        </label>
        <label className='flex justify-between items-center'>
          Password:
          <div className='relative'>
            <input type="text" className='peer outline-none ring-2 focus:ring-violet-300  focus:invalid:ring-red-400 invalid:ring-red-400 border-2 rounded px-4 py-2 ' pattern="^.{4,8}$"/>
            <span className='peer-invalid:block hidden text-red-400 absolute top-full left-0 text-xs'>Campo requerido</span>
          </div>
        </label>

        <button>Log In</button>

      </form>

    </>
  );
}

export default LogIn;
