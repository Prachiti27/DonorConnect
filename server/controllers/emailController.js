import donorModel from "../models/donorModel.js"
import recipientModel from "../models/recipientModel.js"
import { sendEmail } from "../utils/sendEmail.js"

export const contactDonor = async (req, res) => {
  const { donorId } = req.body
  const userId = req.user?._id

  try {
    // 1. Check recipient exists
    const recipient = await recipientModel.findOne({ userId }).populate('userId')
    if (!recipient) {
      return res.json({ success: false, message: 'Not a recipient', redirect: true })
    }

    // 2. Get donor details
    const donor = await donorModel.findById(donorId).populate('userId')
    if (!donor) {
      return res.json({ success: false, message: "Donor not found" })
    }

    // 3. Compose email
    const emailBody = `
      <h2>Blood Donation Request</h2>
      <p><strong>${recipient.userId.name}</strong> is requesting blood donation.</p>
      <p>Contact Details:</p>
      <ul>
        <li>Email: ${recipient.userId.email}</li>
        <li>Phone: ${recipient.contact}</li>
        <li>Location: ${recipient.location}</li>
      </ul>
    `

    // 4. Send email
    const emailResult = await sendEmail(
      donor.userId.email,
      'Blood Donation Request',
      emailBody
    )

    if (emailResult.success) {
      return res.json({ success: true, message: 'Email sent successfully' })
    } else {
      return res.json({ success: false, message: 'Failed to send Email', error: emailResult.error })
    }
  } catch (error) {
    console.error('Contact Donor Error:', error)
    return res.json({ success: false, message: "Server error" })
  }
}
