/**
 * Sample page — Dark Mode UI. Scoped under `.lp-dark`.
 *
 * An actual interface rather than a marketing page: dark mode is a system of
 * surfaces, and the only way to show it is to stack several of them.
 */
import { A } from './anchors';

export function DarkModeLanding() {
  return (
    <div className="lp lp-dark">
      <div className="lpd-app">
        <aside className="lpd-side">
          <span className="lpd-brand">
            <i className="lpd-logo" aria-hidden="true" />
            Strata
          </span>
          <nav>
            <A href="#panel" className="on">
              Queries
            </A>
            <A href="#panel">Dashboards</A>
            <A href="#panel">Alerts</A>
            <A href="#panel">Sources</A>
          </nav>
          <span className="lpd-side-foot">
            <i className="lpd-dot ok" aria-hidden="true" />
            All systems normal
          </span>
        </aside>

        <div className="lpd-main">
          <header className="lpd-top">
            <span className="lpd-crumbs">
              Queries <i>/</i> <b>checkout-latency</b>
            </span>
            <span className="lpd-actions">
              <span className="lpd-pill">Last 24h</span>
              <A className="lpd-btn" href="#panel">
                Run query
              </A>
            </span>
          </header>

          <section className="lpd-canvas" id="panel">
            {/* elevation 2 — the query editor sits above the canvas */}
            <div className="lpd-card">
              <div className="lpd-card-head">
                <span>Query</span>
                <span className="lpd-meta">saved 4m ago</span>
              </div>
              <pre className="lpd-code">
                <span className="k">SELECT</span> route, <span className="f">p95</span>
                (duration_ms) <span className="k">AS</span> p95{'\n'}
                <span className="k">FROM</span> requests{'\n'}
                <span className="k">WHERE</span> status <span className="o">&gt;=</span>{' '}
                <span className="n">500</span>{'\n'}
                <span className="k">GROUP BY</span> route{'\n'}
                <span className="k">ORDER BY</span> p95 <span className="k">DESC</span>
              </pre>
            </div>

            <div className="lpd-card">
              <div className="lpd-card-head">
                <span>p95 latency by route</span>
                <span className="lpd-meta">ms</span>
              </div>
              <div className="lpd-chart" aria-hidden="true">
                {[38, 52, 44, 71, 63, 88, 74, 96, 81, 58, 47, 40].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} className={h > 85 ? 'hot' : undefined} />
                ))}
              </div>
              <div className="lpd-legend">
                <span>
                  <i className="lpd-dot" /> normal
                </span>
                <span>
                  <i className="lpd-dot hot" /> over budget
                </span>
              </div>
            </div>

            <div className="lpd-card wide">
              <div className="lpd-card-head">
                <span>Slowest routes</span>
                <span className="lpd-meta">12 results</span>
              </div>
              <table className="lpd-table">
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>p95</th>
                    <th>Errors</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>/checkout/confirm</td>
                    <td>1,840</td>
                    <td>2.4%</td>
                    <td>
                      <span className="lpd-tag bad">Over budget</span>
                    </td>
                  </tr>
                  <tr className="sel">
                    <td>/cart/apply-code</td>
                    <td>1,210</td>
                    <td>0.9%</td>
                    <td>
                      <span className="lpd-tag warn">Watch</span>
                    </td>
                  </tr>
                  <tr>
                    <td>/search</td>
                    <td>640</td>
                    <td>0.1%</td>
                    <td>
                      <span className="lpd-tag ok">Healthy</span>
                    </td>
                  </tr>
                  <tr>
                    <td>/product/:id</td>
                    <td>410</td>
                    <td>0.0%</td>
                    <td>
                      <span className="lpd-tag ok">Healthy</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* elevation 3 — a popover, lighter again, never a heavier shadow */}
            <div className="lpd-pop">
              <span className="lpd-pop-t">Elevation, not shadow</span>
              <p>
                Each layer is a lighter surface than the one beneath it. In the dark,
                shadows have nothing to fall on.
              </p>
              <div className="lpd-scale" aria-hidden="true">
                <i className="e0" />
                <i className="e1" />
                <i className="e2" />
                <i className="e3" />
              </div>
              <div className="lpd-scale-labels" aria-hidden="true">
                <span>base #0C0D10</span>
                <span>01 #141519</span>
                <span>02 #1B1D22</span>
                <span>03 #24262D</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
