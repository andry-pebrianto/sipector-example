import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "../hooks/useTheme";
import { MyProSidebarProvider } from "../components/global/sidebar/useSidebarContext";
import Topbar from "../components/global/Topbar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div className="w-full h-full">
            <main>
              <Topbar />
              <Suspense
                fallback={
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam nulla placeat repudiandae quam iure tempore autem
                    dignissimos, quo quae ad, provident consequuntur rem a, ea
                    facere amet. Doloribus, ipsa vitae. Vitae, repudiandae?
                    Facilis deleniti eligendi ipsa atque. Excepturi corrupti
                    tempora a voluptatum sunt delectus doloribus culpa accusamus
                    saepe dolore eum, ullam dolorem quasi sit consectetur iure
                    facere. Voluptatem optio dolorum porro necessitatibus sint
                    magni, aut sit harum quia omnis. Reprehenderit qui magnam
                    ullam quisquam optio numquam nemo eum, non in minus, veniam
                    laudantium quae. Sequi sit sint ipsa nobis alias quia,
                    officia enim quisquam expedita a, vitae nesciunt at, cum
                    eveniet culpa accusamus quam rem neque reiciendis quos porro
                    harum? Ullam eum praesentium incidunt expedita vero,
                    dignissimos vitae perferendis iure, veniam eligendi
                    reiciendis, culpa aut minima? Voluptatibus dolor totam
                    corporis autem eos est, neque libero, eveniet nostrum quia
                    soluta ullam, in repellendus esse sapiente minima. Ratione,
                    illum porro. Aliquam dicta dolore, perferendis doloremque
                    quisquam nobis veniam maxime adipisci voluptatem! Eaque,
                    optio perferendis repellendus, praesentium sunt hic minus
                    quod molestias laudantium dolorem, molestiae quaerat dicta
                    omnis error! Esse ex impedit laudantium non expedita vero
                    eveniet odio, architecto commodi tempora recusandae earum
                    distinctio nam nulla doloribus praesentium ad? Magni ducimus
                    quod veritatis dolorem ipsa ipsam id, blanditiis maiores
                    provident quis atque esse ab ea numquam officiis, fugit
                    asperiores dolore nesciunt quibusdam, facilis ut praesentium
                    reprehenderit perferendis? Consequatur dolore nihil
                    assumenda libero blanditiis, aliquid debitis, quam
                    dignissimos eum natus illum voluptas. Atque incidunt natus
                    earum id molestias? Sed dolore animi perferendis ducimus
                    sapiente vitae illum minus assumenda accusamus laboriosam
                    ipsam, cumque inventore aspernatur, magni facere rerum modi
                    et distinctio? Iusto pariatur reiciendis amet illum officia
                    atque possimus, doloremque recusandae, at facilis vitae
                    corrupti deserunt, ipsa dolore numquam consequatur. Illum
                    maxime numquam commodi. Ipsum eius magnam inventore
                    veritatis minima aut pariatur laboriosam, animi soluta
                    eveniet iusto nostrum dolores blanditiis eligendi ex
                    consectetur cupiditate. Dignissimos quas accusamus dolore,
                    corrupti maxime ex facere iure natus nihil dicta eos,
                    praesentium magni eveniet dolorum totam impedit tenetur
                    magnam, consectetur quidem aliquid. Eaque rem quaerat
                    necessitatibus vitae fuga, exercitationem non quia, sunt
                    veniam aliquam suscipit ipsum reprehenderit, excepturi natus
                    placeat optio numquam. Pariatur veritatis corporis animi
                    voluptatibus quibusdam aliquid temporibus natus quia labore
                    in fuga id et numquam nobis quam, assumenda harum quod esse
                    sequi maiores iusto maxime minima odio ad. Sint quisquam,
                    nesciunt itaque voluptates omnis eos officiis ducimus,
                    numquam libero laborum repudiandae nihil velit nam
                    laboriosam officia quas reprehenderit quod hic praesentium
                    ut soluta eligendi saepe facere. Veritatis voluptate,
                    praesentium voluptates voluptas laudantium inventore ipsa
                    qui unde omnis temporibus rerum fugiat quae illum sint id
                    dolorem tempore dolor modi nisi accusamus! Aliquam quidem
                    quia labore inventore corrupti maiores, ipsa dicta a et,
                    omnis cupiditate illo, beatae quasi. Debitis, obcaecati et
                    laboriosam placeat, officiis facere dolores labore nostrum
                    nulla dolore dolorum. Maiores reprehenderit, deserunt magni
                    molestias nobis amet dolorum quam itaque iusto voluptate
                    numquam adipisci corrupti! Aspernatur quisquam explicabo,
                    excepturi minima necessitatibus, iure pariatur porro et,
                    eligendi similique voluptatum. Possimus doloribus quasi
                    libero atque mollitia minus voluptates doloremque nisi ea
                    voluptas laborum ratione, vitae sunt quibusdam temporibus
                    tempore esse facere neque quae dolorum, excepturi omnis. Et
                    eos, amet aliquam blanditiis magnam saepe voluptas ab
                    nostrum repellat neque dolorum illo vel est aut illum non
                    unde odio iste, aperiam magni quibusdam id? Officia iure
                    alias quia sapiente enim eius cumque odit cum! Nobis esse
                    doloribus vitae error vero possimus sapiente molestiae quasi
                    nisi provident tenetur aspernatur, iusto nesciunt assumenda!
                    Totam hic soluta accusantium illo facere ex, voluptates ab
                    ipsa nulla exercitationem animi ipsum quidem? Quisquam dicta
                    doloremque in maiores ipsa, provident consequatur autem,
                    tempora, labore laudantium incidunt voluptas minus sequi est
                    veniam fuga vel inventore sunt deserunt ut placeat
                    repellendus at. Impedit alias adipisci laborum eum facere at
                    ipsum doloremque fuga, nisi itaque sequi nesciunt. Quos
                    vitae voluptas beatae dolorem nemo molestiae esse dicta
                    porro voluptates ut voluptatum, voluptate error minima
                    excepturi natus ad nihil cupiditate sint. Doloremque tempora
                    ipsam deleniti deserunt nisi alias tempore doloribus
                    quibusdam voluptatem. Eos omnis harum beatae aspernatur
                    adipisci nulla quisquam ducimus, blanditiis voluptate
                    incidunt! Nulla sed iste doloremque amet repellendus!
                    Sapiente alias sed veniam et accusantium ab magni odit sit
                    quidem! Laboriosam iusto odio veritatis in perspiciatis
                    voluptatum nulla at enim temporibus ad. Quidem maiores nobis
                    molestiae quaerat ipsa. Beatae dolores aliquid impedit
                    deleniti tempore facilis minus debitis soluta sapiente iure
                    quod nobis optio nihil itaque ratione, voluptates tenetur
                    alias repellat sit! Deleniti sint sed iste veritatis
                    inventore, adipisci placeat quaerat repellat laudantium.
                    Dolorem ducimus, iste vitae earum excepturi hic nisi. Ex
                    aspernatur explicabo tempore porro officia et voluptates.
                    Officiis velit facilis ipsam, soluta repellendus dignissimos
                    dolor aperiam placeat quos alias non in odit exercitationem
                    mollitia! Omnis eveniet autem tenetur perferendis eaque
                    dolores libero ullam aspernatur repellat animi doloribus
                    maxime vitae voluptate, enim asperiores quidem, molestiae
                    cupiditate! Velit nostrum iusto provident molestiae facilis
                    quos ipsam minima, dolor ipsa id quisquam quaerat. Expedita
                    explicabo deserunt laboriosam incidunt dolor, delectus
                    consectetur saepe quod enim illo nesciunt tenetur quidem
                    repudiandae similique omnis odio quaerat est consequatur,
                    vitae praesentium quo assumenda eveniet. Perferendis vitae
                    ullam quaerat deserunt corporis natus, repudiandae corrupti,
                    nisi, eius aliquid ratione nam. Tempore commodi molestiae
                    minus facilis vitae, at quasi veritatis distinctio
                    aspernatur sint numquam, assumenda quam? Voluptatibus
                    eveniet nemo voluptatem? Praesentium perferendis, error
                    minima soluta fuga assumenda modi vitae deleniti corrupti
                    minus placeat quae? Consequatur aperiam error perferendis
                    distinctio impedit. Incidunt quia aspernatur ab qui
                    corrupti, et quisquam necessitatibus natus minus asperiores
                    quod maiores tenetur laboriosam. Dolorum deleniti
                    exercitationem dolor earum quisquam a laborum magnam
                    mollitia molestiae! Magnam molestiae quia quasi, praesentium
                    saepe neque voluptatibus totam ab dolores id, vitae ducimus!
                    Cumque amet laudantium ab libero expedita fugit praesentium
                    facilis nulla natus minima sunt nobis alias voluptatum
                    aliquid dignissimos hic, culpa, aut fugiat explicabo
                    repellat adipisci ratione rerum dolorum nisi! Consectetur
                    eos magni unde tempora consequuntur eaque vitae labore!
                    Omnis itaque harum minus earum fugiat culpa soluta, sapiente
                    nisi deleniti velit aperiam aut deserunt! Voluptatem, nemo?
                    Sequi, asperiores officia officiis sapiente necessitatibus,
                    repellendus sint tenetur in ut consequatur voluptatum nulla
                    nesciunt alias?
                  </h1>
                }
              >
                <Outlet />
              </Suspense>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
