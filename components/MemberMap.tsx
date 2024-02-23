import React, { useState } from 'react';
import { Button } from "components/Button/Button"

interface KeyValueObject {
  name: string | undefined;
  rank: string | undefined;
  value: number | undefined;
}

// Modify the KeyValueMap interface to map string keys to KeyValueObject
interface KeyValueMap {
  [key: string]: KeyValueObject;
}



// Define the keyValueMap with the updated interface
const keyValueMap: KeyValueMap = {
  bc1qlg850kdxtwm3u9w2mjwrhdguch0l36vgdtd4kqlmcqz9pj585dfspp7tzf: { value: 10000000, name: 'Noah Evans', rank: "Founder (Elite Bitcoiner)" },
  bc1qjsgv27pusgtkezcctdzj9f4pwp8l4qavkg8s9n62rvhr49t3jqfs6kjcgk: { value: 10000000, name: 'Jeff Evans', rank: "Founder (Elite Bitcoiner)" },
  bc1qyvf7u9k74p6c2pmsveyatrvpjttm44evxvrccadu5k8h5f2cxxqsy64wwg: { value: 10000000, name: 'Neil Gallon', rank: "Founder (Elite Bitcoiner)" },
  bc1qjy8s749f7qe6sw9lvrq6vvsx2espr0dk7yq66qxsr56uy9ztq33qz39ky9: { value: 10000000, name: 'John Silvestro', rank: "Founder (Elite Bitcoiner)" },
  bc1q45uw65rrnmemfa7y3s43thsrhx30e4m260zlxxpnr67646tzjw7q4ldlcx: { value: 10000000, name: 'Ben Dion', rank: "Founder (Elite Bitcoiner)" },
  bc1q8mzc6am06j4ppj06pg32cs3pqwsy9uqsyhzml3kps23yhz5hfh6q3vxeh7: { value: 10000000, name: 'Brent Garrigus', rank: "Founder (Elite Bitcoiner)" },
  bc1qph70f4jm4vrq97dkerkqd5v4rc6450awc7j88rzkdx60kzd69tqst2d6e8: { value: 10000000, name: 'Corey Edwards', rank: "Founder (Elite Bitcoiner)" },

  bc1q2lkzmdw4qay6uylhzj3jjvf3xjpe33thfxxrs63gxz8ph5xs7qeqwgfx0l: { value: 5000000, name: 'Josh Evans', rank: "Member (Real Bitcoiner)" },
  bc1q08r75pzqwyqugqjggl3keaj4qlt84nja4h892q79akrulaq36musecxqqz: { value: 5000000, name: 'Logan Rey', rank: "Member (Real Bitcoiner)" },
  bc1q06a9wt6tdg35ny3rgawd0rf2fzm3jxydyxac88sqg9eewq7tusrs73jx29: { value: 5000000, name: 'Neil Burckhardt', rank: "Member (Real Bitcoiner)" },
  bc1q2gme7558hzsdsuf2rq04qp7wnc94g2crn0a6tphtr95xfq4d82sqfx6d8v: { value: 5000000, name: 'Satoshi Steve', rank: "Member (Real Bitcoiner)" },
  bc1q9tlqfn7lx8jw92myzxl060w9pfgmh5f2kgua0scdjzcantmq2ptqzw2vas: { value: 5000000, name: 'Cyrus Read', rank: "Member (Real Bitcoiner)" },
  bc1qy6thdhyw8h368m77pwd663fkckkeu7ukud3plssygwj7qqmymdwsz2gtmg: { value: 5000000, name: 'Morteza Esazadeh', rank: "Member (Real Bitcoiner)" },
  bc1ql88qyzwxx6kh29ltj8xjrpz9rrgqpuk3lkwk05ykc4l94xdjxq7s7xa6kr: { value: 5000000, name: 'Daniel LAST_NAME', rank: "Member (Real Bitcoiner)" },
  bc1q83uusfcttprze4v2egwdnl8wwupsn2mqagc4jssaasrvfgfpxu4s90d7vl: { value: 5000000, name: 'Larry Kavounas', rank: "Member (Real Bitcoiner)" },
  bc1qw5rfzt8e4qpjuge4lz8rh64hkc9cyndtk6y5kj9gea7e4xmvlq0stwhmer: { value: 5000000, name: 'Ryan Freeman', rank: "Member (Real Bitcoiner)" },

  bc1q8jsp84nkvnc38pmn8qexqqp3xt86m5qx4ta3w67m77hsagwns0ss6ecrx5: { value: 100000, name: 'Kurt Rein', rank: "Guest (Shitcoiner)" },
  bc1qv0nh7l9cta5vta87qmhfecvpzhmspnedhwcn5m0wgqpy6tltjajqzw5eew: { value: 200000, name: 'Taylor Edwards (+1)', rank: "Guest (Shitcoiner)" },


  bc1qqmyy903pyfzne754kr4t2fr2pe80je3afl7xep25hrmp5q83r9aqsw7fvq: { value: 0, name: 'Andrew Macaluso', rank: "UNKNOWN" },
  bc1qvrfsdf5dsjzfpk5mf8ckhxa0s560yylzgksesgg9wwpvz7e9rafquf93ug: { value: 0, name: 'Richard Kilo Akuna', rank: "UNKNOWN" },
  bc1qtzc0rr545hmwn9tmccuqcs2qe9uvcma0rlqvquhl4c8hhp4r0vts8wy3zd: { value: 0, name: 'Jeff Turner', rank: "UNKNOWN" },
  bc1q8ls8sjxzqz55ehux6hxsfze4vz4gml39qrlvr3a9pcvp5l9qjaxsam4vaz: { value: 0, name: 'Bitcoin Magazine', rank: "UNKNOWN" },
  bc1qtjsfjmlw6cwm7y0wuqt8597jl92h57vmee2netq80qjmyvgg3h2qlnd52c: { value: 0, name: 'Samuel', rank: "UNKNOWN" },
  bc1q9xzt2tu55use60hvhep8c5qv7n972fmcysq24s35s48hrpzle9rqxqr7l0: { value: 5000000, name: 'Mark Noah', rank: "Member (Real Bitcoiner)" },
  bc1q7kwscksp0klarzuut6jztfhg44gw6sshmrpy0sw7y3pysv8jck5s7g75j8: { value: 5000000, name: 'Jeff Walker', rank: "Member (Real Bitcoiner)" },
  bc1ql06mvsg7x0zyqczewdzf60p2wg20p70rqkcvtv2m5xvztzfgnudstxn6zn: { value: 1000000, name: 'Audrey Geiger', rank: "Honorary Member (Bitcoiner)" },

};
export default function MemberMap() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState<KeyValueObject | null>(null); // Update the state type

  const handleSubmit = (e?: React.FormEvent) => { // Make the argument optional
    if (e) {
      e.preventDefault();
    }
    const key = inputValue?.toString();
    if (key && key in keyValueMap) {
      let n = keyValueMap[key]?.name
      let r = keyValueMap[key]?.rank
      let v = keyValueMap[key]?.value
      setResult({ name: n, rank: r, value: v });
      setInputValue('');
    } else {
      setResult(null);
      setInputValue(''); // Also reset input value
    }
  };

  const handleButtonClick = () => {
    handleSubmit(); // Call handleSubmit without passing any arguments
  };

  return (
    <div className="flex h-full w-full flex-col justify-center items-center px-4 py-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a key"
            className="py-2 border-white text-base font-medium"
          />
          <Button href="#" type="button" onClick={handleButtonClick} className="border rounded px-2 py-2 border-white text-base font-medium text-white bg-[#f7931a] hover:bg-[#c05000]">
            Submit
          </Button>
          <Button href="#" onClick={() => setResult(null)} className="border rounded px-2 py-2 border-white text-base font-medium text-white bg-[#f7931a] hover:bg-[#c05000]">
            Reset
          </Button>
        </div>
      </form>
      {result && (
        <div className="text-white bg-[#c05000] mt-2">
          <p>{`Name: ${result.name}`}</p>
          <p>{`Sats paid: ${result.value}`}</p>
          <p>{`Party Invite Status: ${result.rank}`}</p>
        </div>
      )}
    </div>
  );
  
}
