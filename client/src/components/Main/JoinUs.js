import React from 'react'
import Chart from "react-google-charts";

const JoinUs = () => {
    return (
        <div>
			<section class="join_us">
				{/* <img class="l-image" src="assets/images/joinus_left_img.png" alt="" /> */}
				<div class="container">
					<div class="row ">
						<div class="col-xl-4">
							<div class="section-heading content-left">
								<h5 class="subtitle">
									Every day lots of wins
								</h5>
								<h2 class="title ">
									Be One of Them
								</h2>
								<h6 class="text">
									Get started in less than 5 min - no credit card required.Gain 
		early access to Jugaro and experience crypto like never before.
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
