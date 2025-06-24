NOTES:

6/23/25: Don't need to worry about async storage for now -> Supabase persistent instance saved

Maybe a useEffects in app/index, one run at render, to check if the supabaseauth.getUser() is not null, reflecting that in isSignedIn state which would automatically toggle to the Content
stack.

As for when a user signs up/signs in, then I could just navigate to the nested ContentStack in the authstack

