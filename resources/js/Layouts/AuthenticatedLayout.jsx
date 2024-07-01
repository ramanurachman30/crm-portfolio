import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import ApplicationLogoDashboard from "@/Components/ApplicationLogoDashboard";
import TextInput from "@/Components/TextInput";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <div class="page-container pb-5">
                <div className="page-header">
                    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                        <div className="" id="navbarNav">
                            <ul className="navbar-nav" id="leftNav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="sidebar-toggle"
                                        href="#"
                                    >
                                        <i data-feather="arrow-left"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Link href="/">
                            <ApplicationLogoDashboard className="navbar-brand block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="page-sidebar">
                    <ul className="list-unstyled accordion-menu">
                        <li className="sidebar-title">Main</li>
                        <li className="active-page">
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="sidebar-title">Apps</li>
                        <li>
                            <a href="email.html">
                                <i data-feather="inbox"></i>Email
                            </a>
                        </li>
                        <li>
                            <a href="calendar.html">
                                <i data-feather="calendar"></i>Calendar
                            </a>
                        </li>
                        <li>
                            <a href="social.html">
                                <i data-feather="user"></i>Social
                            </a>
                        </li>
                        <li>
                            <a href="file-manager.html">
                                <i data-feather="message-circle"></i>File
                                Manager
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="page-content">
                    <main>{children}</main>

                </div>
            </div>
        </div>
    );
}
