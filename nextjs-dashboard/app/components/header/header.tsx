"use client";

import { useState } from "react";


import React from 'react';
import styles from './header.module.css';
import Link from "next/link";
import Image from "next/image";
import LoginModal from "./loginModal/LoginModal";


export default function Header (){

    const [searchOpen, setSearchOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    return(
            <header className={styles.header}>
                <LoginModal
                open={loginOpen}
                onClose={() => setLoginOpen(false)}
            />
            {/*Se separa en tres partes el header para mostrar algo como LOGO/ MENU / ZONA DE PERFIL*/}
                <div className={styles.container}>
                <div className={styles.row}>
                    {/*Logotipo mundial */}
                        <Link href="components/home" className={styles.link}>
                                <Image
                                src="/logos/Logo.png"
                                alt="Mundial Connect Logo"
                                width={40}
                                height={40}
                                className={styles.logo}
                                />
                                <span className={styles.title}>Mundial Connect</span>
        
                        </Link>
                    {/*Menu Header */}
                        <nav className={styles.nav}>
                            <Link href="/components/partidos" className={styles.navLink}>
                                Partidos
                                <span className={styles.underline}></span>
                            </Link>
                            <Link href="/components/pronosticos" className={styles.navLink}>
                                Pronósticos
                                <span className={styles.underline}></span>
                            </Link>
                            <Link href="/components/foros" className={styles.navLink}>
                                Foros
                                <span className={styles.underline}></span>
                            </Link>
                            <Link href="/components/reuniones" className={styles.navLink}>
                                Reuniones
                                <span className={styles.underline}></span>
                            </Link>
                            <Link href="/components/restaurantes" className={styles.navLink}>
                                Restaurantes
                                <span className={styles.underline}></span>
                            </Link>
                            <Link href="/components/favoritos" className={styles.navLink}>
                                Favoritos
                                <span className={styles.underline}></span>
                            </Link>
                        </nav>
                    {/*Iniciar sesión*/}
                        <div className={styles.group}>
                            <div className={styles.relative}>
                                {!searchOpen && (
                                    <button
                                    className={styles.iconButton}
                                    onClick={() => setSearchOpen(true)}
                                    >
                                        <i className={`ri-search-line ${styles.icon}`}></i>
                                        </button>
                                    )}
                                    {searchOpen && (
                                        <div  className={`${styles.searchContainer} ${searchOpen ? styles.searchOpen : ""}`}>
                                            <input
                                            type="text"
                                            placeholder="Buscar foros, países..."
                                            className={styles.searchInput}
                                            />
                                            <button
                                            className={styles.closeButton}
                                            onClick={() => setSearchOpen(false)}
                                            >
                                                <i className={`ri-close-line ${styles.closeIcon}`}></i>
                                                </button>
                                                </div>
                                            )}
                            </div>

                            

                            <button className={styles.iconButton}>
                                    <i className={`ri-notification-3-line ${styles.icon}`}></i>
                                    <span className={styles.notificationDot}></span>
                                    
                            </button>


                            
                            <Link href="/componentes/perfil" className={styles.link}>
                                        <Image
                                        src="/perfiles/fotoPerfil.jpg"
                                        alt="Usuario"
                                        width={40}
                                        height={40}
                                        className={styles.avatar}
                                        />
                            </Link>
                            <button
                                className={styles.loginButton}
                                onClick={() => setLoginOpen(true)}>
                                Iniciar sesión
                            </button>
                        </div>
                        
                        
                </div>

                </div>
            </header>
       
    )
}