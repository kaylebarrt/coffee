import Link from "next/link";
export function Hero() {
  return (
    <div className=" bg1">
      <div className="container flex justify-between py-8 mx-auto text-white ">
        <div className="text-2xl">
          <h1>
            <span className="font-bold"> COFFEE </span> MAGNIFIC
          </h1>
        </div>
        <div>
          <ul className="flex space-x-6 tracking-wider">
            <li>
              <a id="hero" className="hover:text-golden" href="">
                INÍCIO
              </a>
            </li>
            <li>
              <Link href="/sobrenos">
                <a className="hover:text-golden">SOBRE NÓS</a>
              </Link>
            </li>
            <li>
              <Link href="/cardapio">
                <a className="hover:text-golden">CARDÁPIO</a>
              </Link>
            </li>
            <li>
              <Link href="/agendar">
                <a className="hover:text-golden">RESERVA</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/contato">
                <a className="hover:text-golden">CONTATO</a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center pt-48 text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl text-golden allura">Bolo Especial</h2>
          <h1 className="pb-12 text-6xl"> DOCES DELICIOSOS</h1>
          <p className="pl-2 text-xl tracking-wide border-l-2 hover:border-white border-golden ">
            PARA TODOS OS AMANTES DE DOCES
          </p>
        </div>
      </div>
    </div>
  );
}
