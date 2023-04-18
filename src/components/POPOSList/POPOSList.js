import React, { useState } from "react";
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import "./POPOSList.css";
import data from "../../sfpopos-data.js";

export default function POPOSList() {
  const [query, setQuery] = useState('')
  const spaces = data
    .filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()) || obj.address.toLowerCase().includes(query.toLowerCase()))
    .map(({ id, title, address, images, hours }) => {
      return (
        <POPOSSpace
          id={id}
          key={`${title}-${id}`}
          name={title}
          address={address}
          image={images[0]}
          hours={hours}
        />
      )
    })

  return (
    <section>
      <section className="search">
        <form>
          <input
            type="search"
            value={query}
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>
      <section className="POPOSList">
        {spaces}
      </section>
    </section>
  )
}
