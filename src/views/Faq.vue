<template>
  <div class="bg-blue-75 px-12 py-32">
    <div class="">
      <div>
        <div class="flex flex-col">
          <div class="text-4xl font-bold">Validator FAQs</div>

          <div class="text-2xl font-bold py-6">Introduction</div>
          <hr class="h-0.5 bg-gray-25" />
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
          <div class="text-lg font-bold pt-2">Why do I need to have funds at stake?</div>
          <div class="py-2">As a validator, you’ll need to have funds at stake so you can be penalized for behaving dishonestly.</div>
          <div class="py-2">In other words, to keep you honest, your actions need to have financial consequences.</div>
        </div>

        <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">How much ETH do I need to stake to become a validator?</div>
            <div class="py-2"> Before you can run a validator and start to secure the network, you need to stake 32 ETH. This forms your initial balance.</div>
        </div>

        <div class="flex flex-col py-2">
          <div class="text-lg font-bold pt-2">Is there any advantage to having more than 32 ETH at stake?</div>
          <div class="py-2">No. There is no advantage to having more than 32 ETH staked.</div>
          <div class="py-2">Limiting the maximum stake to 32 ETH encourages decentralization of power as it prevents any
              single
              validator from having an excessively large vote on the state of the chain.</div>
          <div class="py-2 pl-2">
            <em>Remember that a validator’s vote is weighted by the amount it has at stake.</em>
          </div>
        </div>

        <div class="flex flex-col py-2">
          <div class="text-lg font-bold pt-2">Can I stop running my validator for a few days and then start it back up again?</div>
          <div class="py-2">
            If you go offline for a number of days under normal conditions you will lose an amount of ETH roughly equivalent to the amount of ETH you would have gained in that period. In other words, 
            if you stood to earn ≈0.01 ETH, you would instead be penalised ≈0.01 ETH.
          </div>
        </div>

        <div class="flex flex-col py-2">
          <div class="text-lg font-bold pt-2">When should I top up my validator’s balance?</div>
          <div class="py-2">The answer to this question very much depends on how much ETH you have at your disposal.</div>
          <div class="py-2">
            You should certainly top up if your balance is close to 16 ETH. This is to ensure you don’t get kicked out of the validator set (which automatically happens if your balance falls below 16 ETH).
          </div>
          <div class="py-2">
            At the other end of the spectrum, if your balance is closer to 31 ETH, it’s probably not worth adding the extra ETH required to get back to 32.
          </div>
        </div>

        <div  class="flex flex-col py-2">
          <div class="text-lg font-bold pt-2">When can I withdraw my funds, and what’s the difference between exiting and withdrawing?</div>
          <div class="py-2">You can signal your intent to stop validating by signing a voluntary exit message with your validator.</div>
          <div class="py-2">However, bear in mind that for the foreseeable future, once you’ve exited, there’s no going back.</div>
          <div class="py-2">
            There’s no way for you to re-activate your validator, and you won’t be able to transfer or withdraw your funds until after the post-merge cleanup upgrade, currently planned to follow the merge (which
            means your funds will remain inaccessible until then).
          </div>
          <div class="hover:opacity-90"><a href="#">More on the merge ↗</a></div>
        </div>

        <div  class="flex flex-col py-2">
          <div class="text-lg font-bold pt-2">What happened to ‘Eth2?’</div>
          <div class="py-2">The terms ‘Eth1’ and ‘Eth2’ are being deprecated in preparation for the merge.</div>
          <div class="py-2">
            After the merge, there will no longer be two distinct Ethereum networks; there will only Ethereum.
          </div>
          <div class="py-2">
            Ethereum will consist of the <a href="$">execution layer ↗</a> (handles transactions and execution, formerly ‘Eth1’), and the <a href="#">consensus layer ↗</a> (handles proof-of-stake Beacon Chain,
            formerly ‘Eth2’ or ‘Ethereum 2.0’).
          </div>
          <div class="py-2">These terminology updates only change naming conventions; this does not alter Ethereum’s goals or roadmap.</div>
        </div>
      </div>

      <div>
          <div class="flex flex-col">
            <h3 class="text-2xl font-bold py-6">Responsibilities</h3>
            <hr class="h-0.5 bg-gray-25" />
          </div>
          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">How are validators incentivized to stay active and honest?</div>
            <div class="py-2">
              As a validator you are rewarded for proposing / attesting to blocks that are included in the chain.
            </div>
            <div class="py-2">
              On the other hand, you can be penalized for being offline and behaving maliciously – for example attesting to invalid or contradicting blocks.
            </div>
            <div class="py-2">The key concept is the following:</div>
            <ul class="py-2 list-disc space-y-2">
              <li>Rewards are given for actions that help the network reach consensus.</li>
              <li>Minor penalties are given for inadvertant actions (or inactions) that hinder consensus.</li>
              <li>And major penalities – or <strong>slashings</strong> – are given for malicious actions.</li>
            </ul>
            <div class="py-2">
              In other words, you maximize your rewards by providing the greatest benefit to the network as a whole.
            </div>
          </div>

          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">How are rewards/penalties issued?</div>
            <div class="py-2">
              Your balance is updated periodically by the Ethereum network rules as you carry (or fail to carry) out your responsibilities.
            </div>
            <div class="py-2">
              Your validator has its own balance – with the initial balance outlined in the deposit contract. Your rewards and penalties are reflected in your validator’s balance over time.
            </div>
          </div>

          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">How often are rewards/penalties issued?</div>
            <div class="py-2">
              Rewards and penalties are issued roughly every six and a half minutes – a period of time known as an epoch.
            </div>
            <div class="py-2">
              Every epoch, the network measures the actions of each validator and issues your rewards or penalties appropriately.
            </div>
          </div>

          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">How large are the rewards/penalties?</div>
            <div class="py-2">
              There is no easy answer to this question as there are many factors that go into this calculation.
            </div>
            <div class="py-2">
              Arguably the most impactful factor on rewards earned for validating transactions is the total amount of stake in the network. In other words, the total amount of validators. Depending on this figure
              the max annual return rate for a validator can be anywhere between 2 and 20%.
            </div>
            <div class="py-2">
              Given a fixed total number of validators, the rewards/penalties predominantly scale with the balance of the validator – attesting 
              with a higher balance results in larger rewards/penalties whereas attesting with a lower balance results in lower rewards/penalties.
            </div>
            <div class="py-2">
              <em>Note however that this scaling mechanism works in a non-obvious way. 
                To understand the precise details of how it works requires understanding a concept called effective balance. 
                If you’re not yet familiar with this concept, we recommend you read through 
                <a href="#">understanding validator effective balance</a>
              </em>
              ↗
            </div>
          </div>

          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">Why do rewards depend on the total number of validators in the network?</div>
            <div class="py-2">
              Block rewards are calculated using a sliding scale based on the total amount of ETH staked on the network.
            </div>
            <div class="py-2">
              In other words: if the total amount of ETH staked is low, the reward (interest rate) is high, but ss the total stake rises, the reward (interest) paid out to each validator starts to fall.
            </div>
            <div class="py-2">
              Why a sliding scale? While we won’t get into the gory details here, the basic intution is that there needs to be a minimum number of validators (and hence a minimum amount of ETH staked) for the
              network to function properly. So, to incentivize more validators to join, it’s important that the interest rate remains high until this minimum number is reached.
            </div>
            <div class="py-2">
              Afterwards, validators are still encouraged to join (the more validators the more decentralized the network), but it’s not absolutely essential that they do so (so the interest rate can fall).
            </div>
          </div>

          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">How badly will I be penalized for being offline?</div>
            <div class="py-2"> 
              It depends. In addition to the <a href="#">impact of effective balance ↗</a> there are two important scenarios to be aware of:
            </div>
            <ol class="py-2">
              <li>
                Being offline while a supermajority (2/3) of validators is still online leads to relatively small penalties as there are still enough validators online for the chain to finalize. 
                <span>This is the expected scenario.</span>
              </li>
              <li>
                Being offline at the same time as more than 1/3 of the total number of validators leads to harsher penalties, since blocks do not finalize anymore. 
                <span>This scenario is very extreme and unlikely to happen.</span>
              </li>
            </ol>
            <div class="py-2">
              <em>
                Note that in the second (unlikely) scenario, you stand to progressively lose up to 50% (16 ETH) of your stake over 21 days. After 21 days you are ejected out of the validator pool.
                This ensures that blocks start finalizing again at some point.
              </em>
            </div>
          </div>

          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">How great does my uptime need to be for my validator to be net profitable?</div>
            <div class="py-2">
              Overall, we’d expect your validator to be net profitable as long as your uptime is 
              <a href="#"> greater than 50% ↗.</a>
            </div>
            <div class="py-2">
              This means that you don’t need to go to extreme lengths with backup clients or redundant internet
              connections as the repercussions of being offline are not so severe.
            </div>
          </div>
          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">How much will I be penalized for acting maliciously?</div>
            <div class="py-2">
              Again, it depends. Behaving maliciously – for example attesting to invalid or contradicting blocks, will lead to your stake being slashed.
            </div>
            <div class="py-2"> 
              The minimum amount that can be slashed is 1 ETH, but <span>this number increases if other validators are slashed at the same time.</span>
            </div>
            <div class="py-2">
              The idea behind this is to minimize the losses from honest mistakes, but strongly disincentivize coordinated attacks.
            </div>
          </div>

          <div class="flex flex-col py-2">
              <div class="text-lg font-bold pt-2">What exactly is slashing?</div>
              <div class="py-2">
                Slashing has two purposes: (1) to make it prohibitively expensive to attack the network, and (2)
                to stop validators from being lazy by checking that they actually perform their duties. If you’re slashed
                because you’ve acted in a provably destructive manner, a portion of your stake will be
                destroyed.
              </div>
              <div class="py-2">
                If you’re slashed you’re prevented from participating in the protocol further and are forcibly exited.
              </div>
          </div>
      </div>

      <div>
        <div class="flex flex-col">
            <h3 class="text-2xl font-bold py-6">Withdrawal credentials</h3>
            <hr class="h-0.5 bg-gray-25" />
        </div>
        <div class="flex flex-col py-2">
          <div class="text-lg font-bold pt-2">What are withdrawal credentials?</div>
          <div class="py-2">
            <a href="#">Withdrawal Credentials ↗</a> is a 32-byte field in the deposit, for verifying the
              destination of valid withdrawals. Currently, there are two types of withdrawals: BLS withdrawal and Ethereum address
              withdrawal.
          </div>
          <ol class="py-2 space-y-2 list-decimal">
            <li>
              BLS withdrawal: By default, deposit-cli would generate withdrawal credentials with the
              <sapn>withdrawal key</sapn> derived via mnemonics in <a href="#">EIP2334 ↗</a> format.
            </li>
            <li>
              Ethereum address withdrawal: If you want to withdraw to your Mainnet wallet address
              (formerly ‘Eth1’ address) after the post-merge cleanup upgrade, you can set --eth1_withdrawal_address [YOUR
              ETH ADDRESS] when running deposit-cli. <strong>Please ensure that you have control over the keys
              to this address.</strong>
            </li>
          </ol>
        </div>
        <div>
          <div class="text-lg font-bold pt-2">Can I change the withdrawal credentials of my validator after the first deposit?</div>
          <div class="py-2">No, you cannot change your withdrawal credentials in top-ups.</div>
        </div>
      </div>

      <div>
          <div class="flex flex-col">
            <h3 class="text-2xl font-bold py-6">Keys</h3>
            <hr class="h-0.5 bg-gray-25" />
          </div>
          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">What happens if I lose my signing key?</div>
            <div class="py-2">If you lose your signing key, your validator can no longer propose or attest.</div>
            <div class="py-2">
              Over time, your balance will decrease as you are punished for not participating in the consensus process.
              When your balance reaches 16 ETH, you will be automatically exited from the validator pool.
            </div>
            <div class="py-2">
              <em> However, all is not lost. Assuming you derive your keys using </em><em><a href="#">EIP2334</a></em> ↗ 
              <em>
                (as per the default onboarding flow) then you can always recalculate your signing key from your withdrawal key.
              </em>
            </div>
            <div class="py-2">Your 16 ETH can then be withdrawn – with your withdrawal key – after a delay of around a day.</div>
            <div class="py-2">
              <em>Note that this delay can be longer if many others are exiting or being kicked out at the same time.</em>
            </div>
          </div>
          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">What happens if I use BLS withdrawal and I lose my withdrawal key?</div>
            <div class="py-2">If you lose your withdrawal key, there is no way to access to the funds held by your validator.</div>
            <div class="py-2">
              As such, it’s a good idea to create your keys from mnemonics which act as another backup. This will be
              the default for validators who join via this site’s onboarding process.
            </div>
          </div>
          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">What happens if my withdrawal key is stolen?</div>
            <div class="py-2">
              If your withdrawal key is stolen, the thief can transfer your validator’s balance, but only once
              the validator has exited.
            </div>
            <div class="py-2">If your signing key is not under the thief’s control, the thief cannot exit your validator.</div>
            <div class="py-2">
              With your signing key, you could attempt to quickly exit the validator and then transfer the funds – with
              the withdrawal key – before the thief.
            </div>
          </div>
          <div class="flex flex-col py-2">
            <div class="text-lg font-bold pt-2">Why two keys instead of one?</div>
            <div class="py-2">
              Validating involves two keys for security reasons. Your signing key must be available at all times. 
              As such, it will need to be held online. Since anything online is vulnerable to being hacked, it’s not a good idea to use the same key for withdrawals.
            </div>
          </div>
      </div>

      <div>
        <div class="flex flex-col">
          <h3 class="text-2xl font-bold py-6">Support</h3>
          <hr class="h-0.5 bg-gray-25" />
        </div>
        <div class="flex flex-col py-2">
          <div class="text-lg font-bold pt-2">Where can I find troubleshooting support?</div>
          <div class="py-2">
            If you have questions, EthStake community is a good place to get help! You can find support on
            <a href="#">Discord  ↗</a> or <a href="#">Reddit ↗.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
