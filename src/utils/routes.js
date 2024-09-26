import App from "../App";
import {
  IconAgrupamiento,
  IconAsignVehiculo,
  IconCamiones,
  IconCargarVehiculo,
  IconChofer,
  IconDistanciaKM,
  IconDistancias,
  IconGuiaRemitente,
  IconGuiaTransporte,
  IconRutas,
} from "../icons/icons-svg";
import AgruparODPage from "../pages/distribucion/AgruparODPage";
import AgruparODPageReatail from "../pages/distribucion/AgruparODPageReatail";
import AsignarVehiculoPage from "../pages/distribucion/AsignarVehiculoPage";
import GenerarGRR from "../pages/distribucion/GenerarGRR";
import GenerarOTyGRT from "../pages/distribucion/GenerarOTyGRT";
import MantenimientoVehiculosPage from "../pages/distribucion/MantenimientoVehiculosPage";
import MantenimientoRutasPage from "../pages/distribucion/MantenimientoRutasPage";
import MantenimientoDistanciasPage from "../pages/distribucion/MantenimientoDistanciasPage";
import MantenimientoDistritosRutasPage from "../pages/distribucion/MantenimientoDistritosRutasPage";
import {
  PAGE_GENERAR_GRR,
  PAGE_AGRUPAR_OD,
  PAGE_ASIGNAR_VEHICULO,
  PAGE_GENERAR_OT_Y_GRT,
  PAGE_MANTENIMIENTO_RUTAS,
  PAGE_MANTENIMIENTO_VEHICULOS,
  PAGE_MANTENIMIENTO_DISTRITOS_RUTAS,
  PAGE_MANTENIMIENTO_DISTANCIAS,
  PAGE_MANTENIMIENTO_CHOFERES,
  PAGE_BANDEJA_MARCACIONES,
  PAGE_BANDEJA_TAREO,
  PAGE_LLENADO_OT,
  PAGE_AGRUPAR_OD_REATIL,
  PAGE_PREORDEN,
  IMPORTAR_GUIA_REMISION,
} from "./titles";
import MantenimientoChoferesPage from "../pages/distribucion/MantenimientoChoferesPage";
import BandejaMarcacionesPage from "../pages/distribucion/BandejaMarcacionesPage";
import BandejaTareoPage from "../pages/distribucion/BandejaTareoPage";
import LLenadoOTsPage from "../pages/distribucion/LLenadoOTsPage";
import GenerarGRRNew from "../pages/distribucion/GenerarGRRNew";
import PreOrden from "../pages/distribucion/PreOrden";

const routesPages = [
  {
    path: "/distribucion/",
    name: "DISTRIBUICION",
    icon: "",
    element: <App />,
  },
  {
    path: "/distribucion/preorden",
    name: PAGE_PREORDEN,
    icon: (<div className="scale-110"><IconAgrupamiento /></div>),
    element: <PreOrden />,
  },
  {
    path: "/distribucion/agrupar-orden-despacho",
    name: PAGE_AGRUPAR_OD,
    icon: (<div className="scale-110"><IconAgrupamiento /></div>),
    element: <AgruparODPage />,
  },
  {
    path: "/distribucion/agrupar-orden-despacho-reatail",
    name: PAGE_AGRUPAR_OD_REATIL,
    icon: (<div className="scale-110"><IconAgrupamiento /></div>),
    element: <AgruparODPageReatail />,
  },
  {
    path: "/distribucion/importar-guia-remision",
    name: IMPORTAR_GUIA_REMISION,
    icon: <IconGuiaRemitente />,
    element: <GenerarGRRNew />,
  },
  {
    path: "/distribucion/asignar-vehiculo",
    name: PAGE_ASIGNAR_VEHICULO,
    icon: <IconCargarVehiculo />,
    element: <AsignarVehiculoPage />,
  },
  {
    path: "/distribucion/generar-grr",
    name: PAGE_GENERAR_GRR,
    icon: <IconGuiaRemitente />,
    element: <GenerarGRR />,
  },
  {
    path: "/distribucion/generar-ot-grt",
    name: PAGE_GENERAR_OT_Y_GRT,
    icon: <IconGuiaTransporte />,
    element: <GenerarOTyGRT />,
  },
  {
    path: "/distribucion/bandeja-marcaciones",
    name: PAGE_BANDEJA_MARCACIONES,
    icon: <></>,
    element: <BandejaMarcacionesPage />,
  },
  {
    path: "/distribucion/llenado-ot",
    name: PAGE_LLENADO_OT,
    icon: <></>,
    element: <LLenadoOTsPage />,
  },
  {
    path: "/distribucion/bandeja-tareo",
    name: PAGE_BANDEJA_TAREO,
    icon: <></>,
    element: <BandejaTareoPage />,
  },
  {
    path: "/distribucion/mantenimiento/vehiculos",
    name: PAGE_MANTENIMIENTO_VEHICULOS,
    icon: (<div className="scale-95"><IconCamiones/></div>),
    element: <MantenimientoVehiculosPage />,
  },
  {
    path: "/distribucion/mantenimiento/rutas",
    name: PAGE_MANTENIMIENTO_RUTAS,
    icon: <IconRutas/>,
    element: <MantenimientoRutasPage />,
  },
  /* 
  {
    path: "/mantenimiento/distritos-rutas",
    name: PAGE_MANTENIMIENTO_DISTRITOS_RUTAS,
    icon: <></>,
    element: <MantenimientoDistritosRutasPage/>,
  }, */
  {
    path: "/distribucion/mantenimiento/distancias",
    name: PAGE_MANTENIMIENTO_DISTANCIAS,
    icon: true ? (<div className="-mt-8" style={{scale: "0.4"}}><IconDistanciaKM /></div>) : <IconDistancias/>,
    element: <MantenimientoDistanciasPage/>,
  },
  {
    path: "/distribucion/mantenimiento/choferes",
    name: PAGE_MANTENIMIENTO_CHOFERES,
    icon: <IconChofer/>,
    element: <MantenimientoChoferesPage/>,
  },
];

export { routesPages };
