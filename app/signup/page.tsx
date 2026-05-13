const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: formData.get('full_name'),
          phone: formData.get('phone'),
          city: formData.get('city'),
          country: formData.get('country'),
        }
      },
    })

    if (error) {
      alert(error.message)
      setLoading(false)
    } else {
      // FORCE the browser to jump straight to the dashboard
      window.location.href = '/dashboard'
    }
  }
