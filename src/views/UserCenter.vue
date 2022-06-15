<!-- <template>
  <div v-if="!user" class="absolute w-full h-screen bg-black z-40 top-0 foggy-modal opacity-70"/>
  <div class="absolute right-0 sm:w-88 w-full bg-red-10 z-50 h-screen sm:h-130  overflow-y-auto ease-in-out transition transform duration-700" :class="user ? 'translate-x-full' : 'translate-x-0'">
    <div class="flex justify-end p-4" @click="isUser"><button></button><font-awesome-icon :icon="['fas', 'xmark']" class="font-bold text-2xl w-8 h-8" /></div>
    <div class="flex px-8 pb-6">
      <div class="relative">
        <div class="rounded-full bg-white w-14 h-14"/>
        <div class="absolute bg-brown w-14 h-4 rounded-full top-11"></div>
      </div>
      <div class="flex flex-col justify-center ml-4">
        <div>Wallet Adddress</div>
        <div v-if="address">{{`${address.slice(0, -36)}...${address.substring(37)}`}}</div>
        <div v-else>Please connect your wallet</div>
      </div>
    </div> 

    <div class="bg-white rounded-2xl box-shadow m-4 font-bold">
      <div class="p-4">
        <div>Staking Quantity</div>
        <div class="flex items-center py-2">
          <img src="@/assets/USD-Coin-icon_small.png" alt="USD" class="w-6 h-6">
          <div class="ml-1">163.89655  </div>
        </div>
      </div>
      <hr  class="h-1 bg-blue-20"/>
      <div class="flex p-4 justify-around">
        <div class="w-3/5">
          <div>Staking Revenue</div>
          <div class="flex items-center py-2">
            <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
            <div class="ml-1">163.89655  </div>
          </div>
        </div>
        <div class="w-2/5">
          <div>Balance</div>
          <div class="flex items-center py-2">
            <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
            <div class="ml-1">163.89655  </div>
          </div>
          <div class="flex items-center">
            <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-6 h-6">
            <div class="ml-1">163.89655  </div>
          </div>
        </div>
      </div>

    </div>

    <div class="flex justify-center">
      <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full hover:opacity-100" :class="isWithDrawModal? 'bg-red-500':''" @click="withdraw">WITHDRAW</button>
    </div>
    <div v-if="isWithDrawModal" class="flex bg">
      <div>asdfsddddddddddddddddddddd</div>
    </div>
    <div class="bg-white rounded-2xl box-shadow my-8 mx-4 font-bold">
      <div class="py-4 text-center">Ethernet Exchange</div>
      <hr  class="h-1 bg-blue-20"/>
      <div>
        
        <div class="w-40 mx-auto">
          <div class="flex items-center space-x-2 py-1">
            <img src="@/assets/ETH-logo2.png" alt="usd" class="w-8 h-8">
            <div class="text-xl">ETH</div>
            <button class="rounded-full px-4 border border-red-300 text-red-300">max</button>
          </div>
          <div class="bg-red-300 rounded w-full h-9 opacity-60"></div>
          <div class="text-red-300 w-8 h-8 rounded-full border-2 border-red-300 flex justify-center items-center mx-auto my-2">
            <font-awesome-icon :icon="['fas', 'arrow-down']" class="font-bold text-2xl w-6 h-6" />
          </div>
          <div class="flex items-center space-x-2 py-1">
            <img src="@/assets/USD-Coin-icon_small.png" alt="usd" class="w-8 h-8">
            <div class="text-xl">USDC</div>
          </div>
          <div class="bg-red-300 rounded w-full h-9 opacity-60"></div>

          <div class="flex justify-center py-4">
            <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full">CONVERT</button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl box-shadow mx-4 my-4 font-bold flex justify-between p-4">
      <div>
        <div>My Invitations</div>
        <div class="flex items-center py-2">
          <img src="@/assets/avatar.png" alt="avatar" class="w-6 h-6">
          <div>163</div>
        </div>
      </div>
      <div>
        <div>Team income</div>
        <div class="flex items-center py-2">
          <img src="@/assets/ETH-logo2.png" alt="eth" class="w-6 h-6">
          <div>163.89655</div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <button class="bg-red-300 py-1  px-4 font-bold opacity-80 text-white rounded-full">INVITE USERS</button>
    </div>

    <div class="bg-white rounded-2xl box-shadow mx-4 mt-8 mb-36 h-96 ">
      <div class="flex justify-center border-b border-black font-bold">
        <div class="border-r border-black pr-3 py-2">Earnings records</div>
        <div class="pl-3 py-2">Withdrawal records</div>
      </div>
      <div class="text-gray-500 flex justify-between px-2 py-1 border-b border-black">
        <div>2022-5-25 00-00-00</div>
        <div>+0.06255 ETH</div>
      </div>
      <div class="flex justify-between text-gray-500 px-2 py-1 border-b border-black items-center ">
        <div class="flex flex-col">
          <div>2022-5-25 00-00-00</div>
          <div>20.12345 ETH</div>
        </div>
        <div>Status: Warning</div>
      </div>
    </div>
  </div>
</template> -->