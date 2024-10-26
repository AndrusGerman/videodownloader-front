import { NAV_LINKS } from "../internal/core/domain/static-data/nav-links";
import { SITE_DATA } from "../internal/core/domain/static-data/site-data";

export default function Nav() {
  return (
    <nav className="flex bg-amber-600 px-3 py-4 items-baseline">
      <h1 className="px-3 text-xl font-bold">{SITE_DATA.title}</h1>

      <div>
        <ul className="flex pl-3 gap-3">
          {NAV_LINKS.map((link) => (
            <>
              <li className="hover:underline" key={link.link}>
                <a href={link.link}>{link.title}</a>
              </li>
            </>
          ))}
        </ul>
      </div>
    </nav>
  );
}
