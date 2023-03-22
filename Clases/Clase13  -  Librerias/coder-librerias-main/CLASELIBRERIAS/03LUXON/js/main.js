const luxonDateTime = luxon.DateTime;

function init() {
  crearDateTimeLocal();
  crearDateTimeConArgumentos();
  crearDateAPartirDeUnObjeto();
  crearDateTimeConIso();
  usarToLocaleString();
  usarClaseDuration();
  usarClaseInterval();
}

function crearDateTimeLocal() {
  const dtlocal = luxonDateTime.local();
  console.log(dtlocal);
}

function crearDateTimeConArgumentos() {
  const dtConArgs = luxonDateTime.local(2022, 2, 10, 12, 10);
  console.log(dtConArgs);
}

function crearDateAPartirDeUnObjeto() {
  const fromObject = luxonDateTime.fromObject(
    {
      day: 12,
      month: 12,
      year: 2020,
    },
    {
      zone: "America/Bogota",
    }
  );
  console.log(fromObject);
}

function crearDateTimeConIso() {
  const fromIso = luxonDateTime.fromISO("2017-05-05");
  console.log(fromIso);
}

function usarToLocaleString() {
  const dt = luxonDateTime.now();
  dt.toLocaleString();
  console.log(dt);
}

function usarClaseDuration() {
  const dur = luxon.Duration;
  const ejemplo = dur.fromObject({ hour: 3, minutes: 10 });
  console.log(ejemplo);
}

function usarClaseInterval() {
  const int = luxon.Interval;
  const ahora = luxonDateTime.now();
  const masTarde = luxonDateTime.local(2023, 3, 12);
  const intervalo = int.fromDateTimes(ahora, masTarde);

  console.log("DIAS", intervalo.length("days"));
  console.log("MESES", intervalo.length("months"));
  console.log("MINUTOS", intervalo.length("minutes"));
}
