module.exports = (db) => {
  const getEventsHourly = () => {
    const query = {
      text: `
      SELECT date, hour, events
      FROM public.hourly_events
      ORDER BY date, hour
      LIMIT 168;
    `,
    };
    return db
      .query(query)
      .then((res) => res.rows || [])
      .catch((err) => err);
  };
  const getEventsDaily = () => {
    const query = {
      text: `
      SELECT date, SUM(events) AS events
      FROM public.hourly_events
      GROUP BY date
      ORDER BY date
      LIMIT 7;
    `,
    };
    return db
      .query(query)
      .then((res) => res.rows || [])
      .catch((err) => err);
  };
  const getStatsHourly = () => {
    const query = {
      text: `
      SELECT date, hour, impressions, clicks, revenue
      FROM public.hourly_stats
      ORDER BY date, hour
      LIMIT 168;
    `,
    };
    return db
      .query(query)
      .then((res) => res.rows || [])
      .catch((err) => err);
  };
  const getStatsDaily = () => {
    const query = {
      text: `
      SELECT date,
          SUM(impressions) AS impressions,
          SUM(clicks) AS clicks,
          SUM(revenue) AS revenue
      FROM public.hourly_stats
      GROUP BY date
      ORDER BY date
      LIMIT 7;
    `,
    };
    return db
      .query(query)
      .then((res) => res.rows || [])
      .catch((err) => err);
  };
  const getPoi = () => {
    const query = {
      text: `
      SELECT *
      FROM public.poi;
    `,
    };
    return db
      .query(query)
      .then((res) => res.rows || [])
      .catch((err) => err);
  };

  return {
    getEventsHourly,
    getEventsDaily,
    getStatsHourly,
    getStatsDaily,
    getPoi,
  };
};
