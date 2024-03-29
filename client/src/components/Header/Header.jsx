import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/action.js'

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout())
  }
  const { isAuthenticated, user } = useSelector(state => state.auth)
  return (
    <nav
      class="flex items-center justify-between p-6 lg:px-8 shadow-none w-full relative z-20"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <Link to="/" class="logo">
          Anna <span>Daata</span>
        </Link>
      </div>
      {!isAuthenticated && <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>}
      {!isAuthenticated && <div class="hidden lg:flex lg:gap-x-12">
        <Link to="/" class="text-sm font-semibold leading-6 text-white">
          Nearby KIOSKs
        </Link>
        <Link to="/" class="text-sm font-semibold leading-6 text-white">
          Leaderboard
        </Link>
        <Link to="/" class="text-sm font-semibold leading-6 text-white">
          FoodCard
        </Link>
      </div>}
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        {isAuthenticated ? (<button onClick={logoutHandler} class="text-sm font-semibold leading-6 text-white">
          Logout <span aria-hidden="true">&rarr;</span>
        </button>) : (<Link to="/login" class="text-sm font-semibold leading-6 text-white">
          Login to Contribute <span aria-hidden="true">&rarr;</span>
        </Link>)}
      </div>
    </nav>
  );
};

export default Header;
