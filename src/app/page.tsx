'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import TopMenu from '../components/TopMenu';
import CenterImage from '../components/CenterImage';
import Footer from '../components/Footer';

export default function Home(): JSX.Element {
  return (
    <main className="d-flex flex-column min-vh-100">
      <TopMenu />
      <CenterImage />
      <Footer />
    </main>
  );
}
