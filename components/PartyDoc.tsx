import React from 'react';

export default function PartyDoc() {
  return (
    <>
      <div className="h-64 w-full overflow-y-scroll text-white bg-[#c05000] p-4">
        {/* Content inside the scrollable window */}
        <p className='text-2xl'>Cyclical Bitcoin Halvening Party</p>
        <p>When: Block 840,000, 1,050,000, 1,260,000, 1,470,000, and 1,680,000</p>
        <p className="mb-4">Where: TBD</p>
        <p className="text-xl">Overview:</p>
        <p className="mb-4">To celebrate the bitcoin subsidy rewards halving, The Elite Bitcoin Meetup will have a bitcoin themed party. We are at the 4th halving when the block height is 840,000 blocks. I propose a bitcoin party that will take 4 whole cycles to complete. </p>
        <p className="text-xl">Reasons and Goals:</p>
        <ol className="list-decimal ml-6 mb-4">
          <li>I believe bitcoin is a giant clock that will be used in the future for signifying key timestamps in history and would like to celebrate key timestamps on it. New years is an arbitrary date the entire world celebrates due to our current calendars and I would like to have the same thing every cycle for bitcoin enthusiasts. It should be the same type of holiday for our group where we take time off and plan around it.</li>
          <li>Traditions don’t just happen, they are created and memed into reality. This requires the proof of work to make them happen. As such, I would like to make having a bitcoin halving party for our elite bitcoin members a tradition that we can all enjoy.</li>
          <li>The goal is to have a guaranteed huge party every cycle on the block when the block subsidy gets cut in half. The size and scope of the party will grow every cycle with the exchange rate of bitcoin. I would also like to turn the typical bitcoin convention on its head and actually spend bitcoin for this party.</li>
          <li>I know that spending bitcoin is hard for people to accept and the party plan is built around an incentive structure to make this happen. I feel this will encourage a low time preference proof of work between all elite bitcoin meetup members while keeping us connected in the future. We can create a powerful network by doing this.</li>
          <li>I want it to become a sort of “I told you so!” event that all the current precoiners who were not around at this block height will witness and envy. Those of us able to afford the party now will be grateful we spent the sats when they were this cheap. It is important to spend some bitcoin on this as proof of us being right.</li>
        </ol>
        <p className="text-xl">Event Rules:</p>
        <p className="mb-4">This event/club is for members only. Membership fees will go directly towards the party and all related necessities. The fee structure will be broken down below. Anyone paying entrance to the club will be given benefits/access directly tied to their level. The event/club has certain requirements that all participants agree to by paying their membership fee. </p>
        <p className="text-xl">Requirements:</p>
        <ol className="list-decimal ml-6 mb-4">
          <li>We are celebrating the bitcoin timechain and are not on the Gregorian calendar. The party MUST take place during the block halving time. If that means it happens at 3am on a national holiday then so be it. The time and place will be dependent on when the timechain hits the designated block height.</li>
          <li>This requires some flexibility in the event structure. Since we can’t guarantee it will be at a convenient time like 7pm on a friday night then there will be rules to ensure the party occurs. This is a large reason for the fee structure but also to encourage attendance of all members.</li>
          <li>The party location/structure will be based on the current cycle’s budget with some specific rules for ensuring members participation.</li>
        </ol>

        <p className="text-xl">Party Charter Rules:</p>
        <p className="mb-4">I propose a tontine of sorts. Every member must pay a one time set fee for the party. The payout will be done over time for each member equally. The party will be 4 cycles long with 5 halving parties. All funds paid into the tontine will be doled out by the following rules. </p>
        <ol className="list-decimal ml-6 mb-4">
          <li>Sats paid into the membership are forfeit once transferred and will be used as determined by the party charter.</li>
          <li>Each cycle party will use 20% of the sats in the budget. (1 million sats per member, 2 million per founder)</li>
          <li>Every sat budgeted must be spent to the best of the hosts’ abilities. They must also try to save as much sats as possible by paying as close to the party as possible since we always assume bitcoin number go up.</li>
          <li>Any sats left over after the party has been booked and paid for will go into the sat pool for the next party or raffled off.</li>
          <li>The exchange rate for the bitcoin will be determined by the price on the block halving height - (2)*(difficulty adjustment time) which is 4032 blocks before the halving. At this time official party planning must begin to secure a venue and travel arrangements.</li>
          <li>All the sats will be pooled and used to pay for the entirety of the party. This includes all possible member expenses as much as is reasonable. Ideally no member should have to pay any sats to attend the event.</li>
          <li>The party must be over the top as much as possible. Think “The Great Gatsby” meets “Blank Check”. All ideas submitted by members will be considered.</li>
          <li>All payments for the party must be paid in bitcoin. Either directly or through a bitcoin service provider.</li>
          <li>Each individual party can have its own required rules and theme as determined by members. There must be a strong bitcoin theme throughout them all, however.</li>
        </ol>
        <p className="text-xl">Fee Levels:</p>
        <p className="mb-4">Membership for the party will require some sats. This will be spent over the next 16 years so consider that when looking at the prices. If you bank the sats now before the 4th halving you will be guaranteed a unique and exciting party at some point. </p>
        <ol className="list-decimal ml-6 mb-4">
          <li>Founder (Elite Bitcoiner) (10 million sats)
            <ol className="list-disc ml-4">
              <li>Every Party Full Accommodations</li>
              <li>Voting rights on party event and structure</li>
              <li>Can bring +3 invitees as well (with travel expenses covered)</li>
              <li>Guaranteed Priority invites for event (family and others (+3))</li>
              <li>Open by invite only</li>
            </ol>
          </li>
          <li>Full Member (Real Bitcoiner) (5 million sats)
            <ol className="list-disc ml-4">
              <li>Every Party full accommodations (Full Member)</li>
              <li>Can bring a +1 invitee as well (with travel expenses covered)</li>
              <li>Family members welcome and will try to be accommodated (like kids)</li>
              <li>Will be consulted on event structure (food/travel arrangements)</li>
              <li>Must adhere to the tontine rules</li>
              <li>Invites at this level open to founders discretion</li>
            </ol>
          </li>
          <li>Honorary Member (Bitcoiner) (1 million sats)
            <ol className="list-disc ml-4">
              <li>Full accommodations for the 1st party (depending on structure)</li>
              <li>Invite to every subsequent event with +1 and partial accommodations</li>
              <li>Open to meetup members and the like. Basically anyone in bitcoin before this halving is able to join this level and below</li>
            </ol>
          </li>
          <li>Partier (Precoiner) (500k sats)
            <ol className="list-disc ml-4">
              <li>Open invite to every party</li>
              <li>No accommodations (i.e. no hotel paid)</li>
              <li>1st cycle deal only</li>
            </ol>
          </li>
          <li>Guest (Shitcoiner) (100k sats)
            <ol className="list-disc ml-4">
              <li>Invite to this 1st party as it will likely be local</li>
              <li>No accommodations (i.e. no hotel paid)</li>
              <li>1st cycle deal only</li>
            </ol>
          </li>
        </ol>
        <p className="text-xl">Examples</p>
        <p className="mb-4">For an example I will use the assumption of the first party having 15 members with an available budget of 15 million sats. At a Federal Reserve Note exchange rate of $50,000 that would be a budget of $7500. The breakdown of budget will be something similar to the following: </p>

        <ol className="list-decimal ml-6 mb-4">
          <li>Location/Venue:
            <ol className="list-disc ml-4">
              <li>Since we don’t know at what time exactly the halving will be occurring we will be renting out a location with a large portion of the budget. For example, at $7500 budget I am thinking we could do a local airbnb so we can guarantee a location that is open at the halving and we can have full access. I have seen some great places at $3000 for 2 nights that have pools and beds and all that as just an example.</li>
              <li>In the future it could be in a luxury hotel or on my airship. It will depend on bitcoin’s exchange rate and availability.</li>
            </ol>
          </li>
          <li>Travel/Lodging:
            <ol className="list-disc ml-4">
              <li>For the first party travel budget will be limited. We may do full paid uber rides for everyone to make it home safely for example.</li>
              <li>In the future Travel/Lodging budget may include airfare and hotel for the next venue. Or we could all have a lambo rented as another example.</li>
            </ol>
          </li>
          <li>Food/Entertainment:
            <ol className="list-disc ml-4">
              <li>Founders and Full members will be able to decide on what they would like for food and entertainment at the event.</li>
              <li>Depending on the price it may be a taco cart and some gelato or in the future it could be sushi at a michelin star restaurant.</li>
              <li>Entertainment could be pony rides and bounce houses for kids while adults get a live band to play for example.</li>
            </ol>
          </li>
          <li>Etc.:
            <ol className="list-disc ml-4">
              <li>Basically any supplies and extras necessary for the party theme. For example a costume budget for everyone who is attending.</li>
              <li>Decorations and fireworks show for the final block are also some ideas.</li>
            </ol>
          </li>
        </ol>
      </div>
    </>
  );
}
