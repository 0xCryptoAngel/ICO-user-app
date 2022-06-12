<template>
  <div class="bg-blue-75 p-12">
    <div class="">
      <div>
          <div class="flex flex-col">
            <div class="text-4xl font-bold">Validator FAQs</div>

            <div class="text-2xl font-bold py-6">Introduction</div>
            <hr class="content-solid" />
          </div>

          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">What exactly is a validator?</div>
            <div class="py-2">A validator is an entity that participates in the consensus of the Ethereum protocol.</div>
            <div class="py-2">
              Or in other words, a human running a computer process. This process proposes and vouches for new
              blocks to be added to the blockchain.
            </div>
            <div class="py-2">
              In other words, you can think of a validator as a voter for new blocks. The more votes a block gets, the more likely it is to be added to the chain.
            </div>
            <div class="py-2">Importantly, a validator’s vote is weighted by the amount it has at stake.</div>
          </div>

          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">What is the deposit contract?</div>
            <div class="py-2">You can think of the deposit contract as a transfer of funds between Ethereum accounts and Beacon Chain validators.</div>
            <div class="py-2">It specifies who is staking, who is validating, how much is being staked, and who can withdraw the funds.</div>
          </div>

          <div class="flex flex-col py-2">
            <div>Why do I need to have funds at stake?</div>
            <div>As a validator, you’ll need to have funds at stake so you can be penalized for behaving dishonestly.</div>
            <div>In other words, to keep you honest, your actions need to have financial consequences.</div>
          </div>

          <div class="flex flex-col py-2">
              <p>How much ETH do I need to stake to become a validator?</p>
              <p>Before you can run a validator and start to secure the network, you need to stake 32 ETH. This
                  forms your
                  initial balance.</p>
          </div>

          <div>
              <p>Is there any advantage to having more than 32 ETH at stake?</p>
              <p>No. There is no advantage to having more than 32 ETH staked.</p>
              <p>Limiting the maximum stake to 32 ETH encourages decentralization of power as it prevents any
                  single
                  validator from having an excessively large vote on the state of the chain.</p>
              <p class="note"><em>Remember that a validator’s vote is weighted by the amount it has at stake.</em>
              </p>
          </div>

          <div>
              <p>Can I stop running my validator for a few days and then start it back up again?</p>
              <p>If you go offline for a number of days under normal conditions you will lose an amount of ETH
                  roughly
                  equivalent to the amount of ETH you would have gained in that period. In other words, if you
                  stood to
                  earn ≈0.01 ETH, you would instead be penalised ≈0.01 ETH.</p>
          </div>

          <div>
              <p>When should I top up my validator’s balance?</p>
              <p>The answer to this question very much depends on how much ETH you have at your disposal.</p>
              <p>You should certainly top up if your balance is close to 16 ETH. This is to ensure you don’t get
                  kicked
                  out of the validator set (which automatically happens if your balance falls below 16 ETH).</p>
              <p>At the other end of the spectrum, if your balance is closer to 31 ETH, it’s probably not worth
                  adding the
                  extra ETH required to get back to 32.</p>
          </div>

          <div>
              <p>When can I withdraw my funds, and what’s the difference between exiting and withdrawing?</p>
              <p>You can signal your intent to stop validating by signing a voluntary exit message with your
                  validator.
              </p>
              <p>However, bear in mind that for the foreseeable future, once you’ve exited, there’s no going back.
              </p>
              <p>There’s no way for you to re-activate your validator, and you won’t be able to transfer or
                  withdraw your
                  funds until after the post-merge cleanup upgrade, currently planned to follow the merge (which
                  means
                  your funds will remain inaccessible until then).</p>
              <p class="link-para"><a href="#">More on the merge ↗</a></p>
          </div>

          <div>
              <p>What happened to ‘Eth2?’</p>
              <p>The terms ‘Eth1’ and ‘Eth2’ are being deprecated in preparation for the merge.</p>
              <p>After the merge, there will no longer be two distinct Ethereum networks; there will only
                  Ethereum.</p>
              <p>Ethereum will consist of the <a href="$">execution layer ↗</a> (handles transactions and
                  execution,
                  formerly
                  ‘Eth1’), and the <a href="#">consensus layer ↗</a> (handles proof-of-stake Beacon Chain,
                  formerly ‘Eth2’
                  or
                  ‘Ethereum 2.0’).</p>
              <p>These terminology updates only change naming conventions; this does not alter Ethereum’s goals or
                  roadmap.</p>
          </div>
      </div>
      <div>
          <div>
              <h3>Responsibilities</h3>
              <hr class="content-solid" />
          </div>
          <div>
              <p>How are validators incentivized to stay active and honest?</p>
              <p>As a validator you are rewarded for proposing / attesting to blocks that are included in the
                  chain.</p>
              <p>On the other hand, you can be penalized for being offline and behaving maliciously – for example
                  attesting to invalid or contradicting blocks.</p>
              <p>The key concept is the following:</p>
              <ul>
                  <li>Rewards are given for actions that help the network reach consensus.</li>
                  <li>Minor penalties are given for inadvertant actions (or inactions) that hinder consensus.</li>
                  <li>And major penalities – or <span>slashings</span> – are given for malicious actions.</li>
              </ul>
              <p>In other words, you maximize your rewards by providing the greatest benefit to the network as a
                  whole.
              </p>
          </div>

          <div>
              <p>How are rewards/penalties issued?</p>
              <p>Your balance is updated periodically by the Ethereum network rules as you carry (or fail to
                  carry) out
                  your responsibilities.</p>
              <p>Your validator has its own balance – with the initial balance outlined in the deposit contract.
                  Your
                  rewards and penalties are reflected in your validator’s balance over time.</p>
          </div>

          <div>
              <p>How often are rewards/penalties issued?</p>
              <p>Rewards and penalties are issued roughly every six and a half minutes – a period of time known as
                  an
                  epoch.</p>
              <p>Every epoch, the network measures the actions of each validator and issues your rewards or
                  penalties
                  appropriately.</p>
          </div>

          <div>
              <p>How large are the rewards/penalties?</p>
              <p>There is no easy answer to this question as there are many factors that go into this calculation.
              </p>
              <p>Arguably the most impactful factor on rewards earned for validating transactions is the total
                  amount of
                  stake in the network. In other words, the total amount of validators. Depending on this figure
                  the max
                  annual return rate for a validator can be anywhere between 2 and 20%.</p>
              <p>Given a fixed total number of validators, the rewards/penalties predominantly scale with the
                  balance of
                  the validator – attesting with a higher balance results in larger rewards/penalties whereas
                  attesting
                  with a lower balance results in lower rewards/penalties.</p>
              <p class="note"><em>Note however that this scaling mechanism works in a non-obvious way. To
                      understand the
                      precise
                      details of how it works requires understanding a concept called effective balance. If you’re
                      not yet
                      familiar with this concept, we recommend you read through <a href="#">understanding
                          validator
                          effective
                          balance ↗</a></em></p>
          </div>

          <div>
              <p>Why do rewards depend on the total number of validators in the network?</p>
              <p>Block rewards are calculated using a sliding scale based on the total amount of ETH staked on the
                  network.</p>
              <p>In other words: if the total amount of ETH staked is low, the reward (interest rate) is high, but
                  as the
                  total stake rises, the reward (interest) paid out to each validator starts to fall.</p>
              <p>Why a sliding scale? While we won’t get into the gory details here, the basic intution is that
                  there
                  needs to be a minimum number of validators (and hence a minimum amount of ETH staked) for the
                  network to
                  function properly. So, to incentivize more validators to join, it’s important that the interest
                  rate
                  remains high until this minimum number is reached.</p>
              <p>Afterwards, validators are still encouraged to join (the more validators the more decentralized
                  the
                  network), but it’s not absolutely essential that they do so (so the interest rate can fall).</p>
          </div>

          <div>
              <p>How badly will I be penalized for being offline?</p>
              <p>It depends. In addition to the <a href="#">impact of effective balance ↗</a> there are two
                  important
                  scenarios to
                  be aware of:</p>
              <ol>
                  <li>Being offline while a supermajority (2/3) of validators is still online leads to relatively
                      small
                      penalties as there are still enough validators online for the chain to finalize. <span>This
                          is the
                          expected scenario.</span></li>
                  <li>Being offline at the same time as more than 1/3 of the total number of validators leads to
                      harsher
                      penalties, since blocks do not finalize anymore. <span>This scenario is very extreme and
                          unlikely to
                          happen.</span></li>
              </ol>
              <p class="note"><em>Note that in the second (unlikely) scenario, you stand to progressively lose up
                      to 50%
                      (16 ETH)
                      of your stake over 21 days. After 21 days you are ejected out of the validator pool.
                      This
                      ensures that blocks start finalizing again at some point.</em></p>
          </div>

          <div>
              <p>How great does my uptime need to be for my validator to be net profitable?</p>
              <p>Overall, we’d expect your validator to be net profitable as long as your uptime is <a
                      href="#">greater
                      than 50%
                      ↗.</a></p>
              <p>This means that you don’t need to go to extreme lengths with backup clients or redundant internet
                  connections as the repercussions of being offline are not so severe.</p>
          </div>
          <div>
              <p>How much will I be penalized for acting maliciously?</p>
              <p>Again, it depends. Behaving maliciously – for example attesting to invalid or contradicting
                  blocks, will
                  lead to your stake being slashed.</p>
              <p>The minimum amount that can be slashed is 1 ETH, but <span>this number increases if other
                      validators are
                      slashed at the same time.</span></p>
              <p>The idea behind this is to minimize the losses from honest mistakes, but strongly disincentivize
                  coordinated attacks.</p>
          </div>

          <div>
              <p>What exactly is slashing?</p>
              <p>Slashing has two purposes: (1) to make it prohibitively expensive to attack the network, and (2)
                  to stop
                  validators from being lazy by checking that they actually perform their duties. If you’re
                  slashed
                  because you’ve acted in a provably destructive manner, a portion of your stake will be
                  destroyed.</p>
              <p>If you’re slashed you’re prevented from participating in the protocol further and are forcibly
                  exited.
              </p>
          </div>
      </div>

      <div>
          <div>
              <h3>Withdrawal credentials</h3>
              <hr class="content-solid" />
          </div>
          <div>
              <p>What are withdrawal credentials?</p>
              <p><a href="#">Withdrawal Credentials ↗</a> is a 32-byte field in the deposit, for verifying the
                  destination
                  of valid
                  withdrawals. Currently, there are two types of withdrawals: BLS withdrawal and Ethereum address
                  withdrawal.</p>
              <ol>
                  <li>BLS withdrawal: By default, deposit-cli would generate withdrawal credentials with the
                      <sapn>
                          withdrawal key</sapn> derived via mnemonics in <a href="#">EIP2334 ↗</a> format.
                  </li>
                  <li>Ethereum address withdrawal: If you want to withdraw to your Mainnet wallet address
                      (formerly ‘Eth1’
                      address) after the post-merge cleanup upgrade, you can set --eth1_withdrawal_address [YOUR
                      ETH
                      ADDRESS] when running deposit-cli. <span>Please ensure that you have control over the keys
                          to this
                          address.</span></li>
              </ol>
          </div>
          <div>
              <p>Can I change the withdrawal credentials of my validator after the first deposit?</p>
              <p>No, you cannot change your withdrawal credentials in top-ups.</p>
          </div>
      </div>
      <div>
          <div>
              <h3>Keys</h3>
              <hr class="content-solid" />
          </div>
          <div>
              <p>What happens if I lose my signing key?</p>
              <p>If you lose your signing key, your validator can no longer propose or attest.</p>
              <p>Over time, your balance will decrease as you are punished for not participating in the consensus
                  process.
                  When your balance reaches 16 ETH, you will be automatically exited from the validator pool.</p>
              <p class="note"><em>However, all is not lost. Assuming you derive your keys using <a
                          href="#">EIP2334 ↗</a> (as per the
                      default
                      onboarding flow) then you can always recalculate your signing key from your withdrawal
                      key.</em></p>
              <p>Your 16 ETH can then be withdrawn – with your withdrawal key – after a delay of around a day.</p>
              <p class="note"><em>Note that this delay can be longer if many others are exiting or being kicked
                      out at the same
                      time.</em></p>
          </div>
          <div>
              <p>What happens if I use BLS withdrawal and I lose my withdrawal key?</p>
              <p>If you lose your withdrawal key, there is no way to access to the funds held by your validator.
              </p>
              <p>As such, it’s a good idea to create your keys from mnemonics which act as another backup. This
                  will be
                  the default for validators who join via this site’s onboarding process.</p>
          </div>
          <div>
              <p>What happens if my withdrawal key is stolen?</p>
              <p>If your withdrawal key is stolen, the thief can transfer your validator’s balance, but only once
                  the
                  validator has exited.</p>
              <p>If your signing key is not under the thief’s control, the thief cannot exit your validator.</p>
              <p>With your signing key, you could attempt to quickly exit the validator and then transfer the
                  funds – with
                  the withdrawal key – before the thief.</p>
          </div>
          <div>
              <p>Why two keys instead of one?</p>
              <p>Validating involves two keys for security reasons. Your signing key must be available at all
                  times. As
                  such, it will need to be held online. Since anything online is vulnerable to being hacked, it’s
                  not a
                  good idea to use the same key for withdrawals.</p>
          </div>
      </div>
      <div>
          <div>
              <h3>Support</h3>
              <hr class="content-solid" />
          </div>
          <div>
              <p>Where can I find troubleshooting support?</p>
              <p>If you have questions, EthStake community is a good place to get help! You can find support on
                  <a href="#">Discord
                      ↗</a> or <a href="#">Reddit ↗.</a>
              </p>
          </div>
      </div>
    </div>
  </div>
</template>
