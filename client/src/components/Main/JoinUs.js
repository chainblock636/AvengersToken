import React from 'react'
import Chart from "react-google-charts";

const JoinUs = () => {
    return (
        <div>
			<section class="join_us" id="Tokenomics">
				{/* <img class="l-image" src="assets/images/joinus_left_img.png" alt="" /> */}
				<div class="container">
					<div class="row ">
						<div class="col-xl-4">
							<div class="section-heading content-left">
								<h5 class="subtitle">
									Tokenomics
								</h5>
								<h6 class="text">
								Pre-seed sale 1%
								</h6>
								<h6 class="text">
								Seed sale 4%
								</h6>
								<h6 class="text">
								Public sale 30% 
								</h6>
								<h6 class="text">
								Team 5% (2 years vesting)
								</h6>
								<h6 class="text">
								Advisor and investors 5% (2 years vesting)
								</h6>
								<h6 class="text">
								Community, airdrop and staking reward (external 5%) 25% - 3 years program
								</h6>
								<h6 class="text">
								Development 10%
								</h6>
								<h6 class="text">
								Marketing 20%
								</h6>
							</div>
						</div>
						<div class="col-xl-8">
							<div class="section-heading content-left">
							<Chart
								width={"100%"}
								height={"400px"}
								chartType="PieChart"
								loader={<div>Avengers Token</div>}
								data={[
									["Token", "Percentage shared"],
									["Pre-seed sale",  7500000000],
									["Private sale", 30000000000],
									["Launchpad Presale",  225000000000],
									["Team", 37500000000],
									["Advisor and investors", 37500000000],
									["Community, airdrop and staking reward ", 187500000000],
									["Development", 75000000000],
									["Marketing", 150000000000],
								]}
								options={{
									title: "Total supply: 750,000,000,000 AVET",
									is3D: true,
									backgroundColor: 'transparent',
									legendTextStyle: { color: '#FFF' },
									titleTextStyle: { color: '#FFF' },
								}}
								rootProps={{ "data-testid": "2" }}
							/>
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    )
}

export default JoinUs
