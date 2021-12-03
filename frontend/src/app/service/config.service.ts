import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  apiUrl = `http://localhost:3000/`;

  navigation: { label: string, href: string }[] = [
    { label: 'Főoldal', href: '' },    
    { label: 'Rendelési tájékoztató', href: 'information' },
    { label: 'Kapcsolat', href: '/contact' },
    { label: 'Miben van a legtöbb...?', href: '/bestof' },
    { label: 'Profilom', href: '/profil' },
    { label: 'Regisztráció', href: '/registration' },
    { label: 'Admin', href: '/admin' },
  ];

  billColumns: { key: string, label: string }[] = [
    { key: '_id', label: 'Id' },
    { key: 'orderId', label: 'Megrendelő azonosítója' },
    { key: 'amount', label: 'Összeg' },
    { key: 'status', label: 'Status' },
  ];

  foodColumns: { key: string, label: string }[] = [
    { key: '_id', label: 'Id' },
    { key: 'foodName', label: 'Név' },
    { key: 'price', label: 'Ára' },
    { key: 'active', label: 'Rendelhető?' },
    { key: 'category', label: 'Kategória' },
    { key: 'image', label: 'Kép' },
    { key: 'ingredients', label: 'Összetevők' },
  ];

  nutrientColumns: { key: string, label: string }[] = [
    { key: '_id', label: 'Id' },
    { key: 'foodName', label: 'Név' },
    { key: 'foodGroup', label: 'ételcsoport' },
    { key: 'Avitamin', label: 'A' },
    { key: 'B1vitamin', label: 'B1' },
    { key: 'B2vitamin', label: 'B2' },
    { key: 'B3vitamin', label: 'B3' },
    { key: 'B5vitamin', label: 'B5' },
    { key: 'B6vitamin', label: 'B6' },
    { key: 'B12vitamin', label: 'B12' },
    { key: 'Cvitamin', label: 'C' },
    { key: 'Dvitamin', label: 'D' },
    { key: 'Evitamin', label: 'E' },
    { key: 'Kvitamin', label: 'K' },
    { key: 'folat', label: 'folát' },
    { key: 'kalcium', label: 'kalcium' },
    { key: 'rez', label: 'réz' },
    { key: 'vas', label: 'vas' },
    { key: 'magnezium', label: 'magnézium' },
    { key: 'mangan', label: 'mangán' },
    { key: 'foszfor', label: 'foszfor' },
    { key: 'kalium', label: 'kalium' },
    { key: 'szelen', label: 'szelén' },
    { key: 'natrium', label: 'nátrium' },
    { key: 'cink', label: 'cink' },
    { key: 'omegaharom', label: 'omega-3' },
    { key: 'omegahat', label: 'omega-6' },
    { key: 'telitett', label: 'telített zsír' },
    { key: 'szenhidrat', label: 'szénhidrát' },
    { key: 'rost', label: 'rost' },
    { key: 'kemenyito', label: 'keményítő' },
    { key: 'feherje', label: 'fehérje' },
    { key: 'cisztein', label: 'cisztein' },
    { key: 'hisztidin', label: 'hisztidin' },
    { key: 'izoleucin', label: 'izoleucin' },
    { key: 'leucin', label: 'leucin' },
    { key: 'lizin', label: 'lizin' },
    { key: 'metionin', label: 'metionin' },
    { key: 'fenilAlanin', label: 'fenil-alanin' },
    { key: 'treonin', label: 'treonin' },
    { key: 'triptofan', label: 'triptofán' },
    { key: 'tirozin', label: 'tirozin' },
    { key: 'valin', label: 'valin' },
    { key: 'zsir', label: 'zsír' },
  ];

  orderColumns: { key: string, label: string }[] = [
    { key: '_id', label: 'Id' },
    { key: 'userId', label: 'Megrendelő azonosítója' },
    { key: 'foodId', label: 'Étel azonosítója' },
    { key: 'amount', label: 'Összeg' },
    { key: 'status', label: 'Status' },
    { key: 'time', label: 'Rendelés időpontja' },
  ];

  userColumns: { key: string, label: string }[] = [
    { key: '_id', label: 'Id' },
    { key: 'firstName', label: 'Keresztnév' },
    { key: 'lastName', label: 'Vezetéknév' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Telefon' },
    { key: 'zip', label: 'Irányítószám' },
    { key: 'city', label: 'Település' },
    { key: 'address', label: 'Cím' },
    { key: 'password', label: 'Password' },
    { key: 'role', label: 'Role' },
    { key: 'token', label: 'Token' },
  ];

  messageColumns: { key: string, label: string }[] = [
    { key: '_id', label: 'Id' },
    { key: 'email', label: 'Email' },
    { key: 'message', label: 'Üzenet' }
  ];
}
