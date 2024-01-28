/* 
  File Name: Contact.jsx
  Student's Name: Foysal Ahamed Sifat
  Student ID: 301368430
  Date: January 28, 2024
*/
export default function Contact() {
    const onSubmitClick = () =>{
      window.location.href = '/';
    }
    return (
      <>
   <div class="w3-light-grey w3-twothird margin-4">

<div class="w3-container w3-card w3-white">
<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-envelope-o fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Contact </h2>

		<div class="innerwrap">
			<section class="section2 clearfix">
				<div class="col2 column1 first w3-margin-top">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.9882298299535!2d-79.26106438843225!3d43.731571370978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce3ac4d8f1ab%3A0xc97fc41f48a41e7f!2s14%20Charity%20Rd%2C%20Scarborough%2C%20ON%20M1K%203R9!5e0!3m2!1sen!2sca!4v1706434106206!5m2!1sen!2sca" width={450} height={350} style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div class="col2 column2 last">
					<div class="sec2innercont">
						<div class="sec2addr">
							<p><span class="collig">Address:</span>14 Charity Rd, Scarborough, ON</p>
							<p><span class="collig">Phone :</span> +1 437 383 3348</p>
							<p><span class="collig">Email :</span> foysalahamedsifat@gmail.com / foysal@pimonas.com</p>
						</div>
					</div>
					<div class="sec2contactform">
						<h3 class="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
						<form action="">
							<div class="clearfix">
								<input class="col2 first" type="text" placeholder="First name" />
								<input class="col2 last" type="text" placeholder="Last name"/>
							</div>
							<div class="clearfix">
								<input  class="col2 first" type="Email" placeholder="Email"/>
								<input class="col2 last" type="text" placeholder="Contact number"/>
							</div>
							<div class="clearfix">
								<textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
							</div>
							<div class="clearfix"><input type="button" onClick={onSubmitClick} value="Send"/></div>
						</form>
					</div>

				</div>
			</section>
		
		</div>
	</div>
  </div>
      </>
    );
  }

