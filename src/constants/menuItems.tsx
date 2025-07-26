import searchIcon from 'assets/icons/isearch.png';
import homeIcon from 'assets/icons/ihome.png';
import showsIcon from 'assets/icons/ishows.png';
import moviesIcon from 'assets/icons/imovies.png';
import genersIcon from 'assets/icons/igenres.png';
import laterIcon from 'assets/icons/ilater.png';

export const menuItems = [
  {
    icon: searchIcon,
    title: 'Search',
  },
  {
    icon: homeIcon,
    title: 'Home',
    active: true,
  },
  {
    icon: showsIcon,
    title: 'TV Shows',
  },
  {
    icon: moviesIcon,
    title: 'Movies',
  },
  {
    icon: genersIcon,
    title: 'Genres',
  },
  {
    icon: laterIcon,
    title: 'Watch Later',
  },
];

export const additionalMenuItems = ['LANGUAGE', 'GET HELP', 'EXIT'];
